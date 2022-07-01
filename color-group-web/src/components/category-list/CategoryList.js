import CollapsableCard from "../collapsable-card/CollapsableCard";

export default function CategoryList({ categorizedList, cardContent, cardTitle, showCategory = true }) {
    const categoryList = Object.keys(categorizedList).map((category, i) => {
        const categorizedCards = categorizedList[category].map((item, j) => {
            const title = cardTitle?.(category, item) || "";

            return (
                <CollapsableCard key={`categorized-list-card-${category}-${item}-${j}`} title={title} >
                    {cardContent?.(category, item) || ""}
                </CollapsableCard>
            );
        });

        return (
            <div key={`category-list-${category}-${i}`}>
                { showCategory ? <h2>{category}</h2> : <></> }
                <div>
                    {categorizedCards}
                </div>
            </div>
        );
    });

    return (
        <div>
            {categoryList}
        </div>
    );
}
