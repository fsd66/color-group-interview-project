import React from "react";
import "./filter-selector.css";

export default function FilterSelector({ groupOptions, filterOptions, onGroupChange = (grouping, e) => console.log(grouping), onFilterChange = (type, value, e) => console.log(type, value) }) {
    const groupChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        onGroupChange(value, e);
    };

    const filterChange = (e) => {
        e.preventDefault();
        const [type, value] = e.target.value.split(",");
        onFilterChange(type, value, e);
    }

    const groupOptionSelections = groupOptions.map((v, i) => {
        return <option key={`group-option-selection-${v}-${i}`}>{v}</option>
    });

    const filterOptionSelections = Object.keys(filterOptions ?? "").map((filterGroup, i) => {
        const selections = filterOptions[filterGroup].map((option, j) => {
            return <option key={`filter-option-selection-${filterGroup}-${option}-${i}-${j}`} value={`${filterGroup},${option}`}>{option}</option>
        });

        return (
            <optgroup label={filterGroup} key={`filter-option-optgroup-${filterGroup}-${i}`}>
                {selections}
            </optgroup>
        );
    });

    return (
        <div className="filter-selector">
            <div>
                <label>
                    <span>Group by: </span>
                    <select onChange={groupChange}>
                        <option>All</option>
                        {groupOptionSelections}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    <span>Filter: </span>
                    <select onChange={filterChange}>
                        <option value="None,None">None</option>
                        {filterOptionSelections}
                    </select>
                </label>
            </div>
        </div>
    );
}
