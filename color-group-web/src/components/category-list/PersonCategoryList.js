import CategoryList from "./CategoryList";
import PersonCardTitle from "../person-card-title/PersonCardTitle";
import PersonEdit from "../person-edit/PersonEdit";

export default function PersonCategoryList({ categorizedList, showCategory = true, onEditSubmit = (personData, updateMode, e) => { }, onEditCancel = (personData, updateMode, e) => { } }) {
    return (
        <CategoryList
            categorizedList={categorizedList}
            cardTitle={(_, person) => <PersonCardTitle personData={person} />}
            cardContent={(_, person) => <PersonEdit
                initialPersonData={person}
                updateMode={true}
                onSubmit={onEditSubmit}
                onCancel={(updateMode, e) => onEditCancel(person, updateMode, e)}
            />}
            showCategory={showCategory}
        />
    );
}
