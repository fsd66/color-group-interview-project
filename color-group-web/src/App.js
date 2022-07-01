import React, { useState, useEffect } from "react";

import ColorGroupHeader from './components/header/ColorGroupHeader';
import PersonCategoryList from './components/category-list/PersonCategoryList';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';
import FilterSelector from './components/filter-selector/FilterSelector';
import PersonEdit from "./components/person-edit/PersonEdit";
import NewButton from "./components/buttons/NewButton";

import { sortCategories } from './utilities/list-organizer';
import { createPerson, getAllColors, getAllGroups, retrieveAllPersons, retrieveAllPersonsInGroup, retrieveAllPersonsWithColor, updatePerson } from './utilities/api';

import './App.css';

const DEFAULT_FILTER = ["None", "None"];

export default function App() {
  const [persons, setPersons] = useState([]);
  const [groupingSelection, setGroupingSelection] = useState("All");
  const [filterOptions, setFilterOptions] = useState({ Group: [], Color: [] });
  const [filterSelection, setFilterSelection] = useState(DEFAULT_FILTER);
  const [displayList, setDisplayList] = useState(<LoadingSpinner />);
  const [newPersonFormOpen, setNewPersonFormOpen] = useState(false);
  const [reload, reloadApp] = useState({});

  const retrievePersons = () => {
    const [type, value] = filterSelection;

    switch (type) {
      case "Group":
        retrieveAllPersonsInGroup(value).then((persons) => setPersons(persons));
        break;

      case "Color":
        retrieveAllPersonsWithColor(value).then((persons) => setPersons(persons));
        break;

      default:
        retrieveAllPersons().then((persons) => setPersons(persons));
        break;
    }
  };

  const onClickNewPersonButton = (e) => {
    e.preventDefault();
    setNewPersonFormOpen(true);
  }

  const onCloseNewPersonForm = (e) => {
    e.preventDefault();
    setNewPersonFormOpen(false);
  }

  const onGroupChange = (grouping) => {
    setGroupingSelection(grouping);
  };

  const onFilterChange = (type, value) => {
    setFilterSelection([type, value]);
  };

  const onPersonUpdate = (person, update) => {
    let promise;
    if (update) {
      promise = updatePerson(person);

    } else {
      promise = createPerson(person);
      setNewPersonFormOpen(false);
    }

    promise.then(() => reloadApp({}));
  };

  useEffect(() => {
    // Get filter groups on load and when Persons are created or edited
    Promise.all([getAllGroups(), getAllColors()]).then(([groups, colors]) => setFilterOptions({ Group: groups, Color: colors }));
  }, [reload]);

  useEffect(() => {
    // Check for invalid filterSelection when filterOptions is changed, set to no filter if found invalid
    const [selectedType, selectedValue] = filterSelection;
    if (selectedType === "None" && selectedValue === "None") {
      // ["None", "None"] is always valid
      return;
    }

    const test = filterOptions?.[selectedType]?.includes(selectedValue);
    if (test === undefined || !test) {
      setFilterSelection(DEFAULT_FILTER);
    }
  }, [filterOptions]);

  useEffect(() => {
    // Retrieve person data on load, when filter selections are changed, and when Persons are created or edited
    retrievePersons();
  }, [filterSelection, reload]);

  useEffect(() => {
    // Sort and organize person data on load, when grouping selections are changed, and when person data is re-retrieved
    const organizedList = sortCategories(persons, groupingSelection === "All" ? undefined : groupingSelection.toLowerCase());
    setDisplayList(<PersonCategoryList categorizedList={organizedList} showCategory={groupingSelection !== "All"} onEditSubmit={onPersonUpdate} />);
  }, [persons, groupingSelection]);

  const newPersonComponent = newPersonFormOpen ?
    <div><h3>Create New Person:</h3><PersonEdit updateMode={false} onSubmit={onPersonUpdate} onCancel={(_, e) => onCloseNewPersonForm(e)}/></div> :
    <NewButton onClick={onClickNewPersonButton} />

  return (
    <div className="App">
      <ColorGroupHeader />
      <FilterSelector groupOptions={["Group", "Color"]} filterOptions={filterOptions} onGroupChange={onGroupChange} onFilterChange={onFilterChange} />
      <div className="flex-box">{newPersonComponent}</div>
      {displayList}
    </div>
  );
}
