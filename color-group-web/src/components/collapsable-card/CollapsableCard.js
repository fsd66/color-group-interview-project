import { useState } from "react";
import ConditionalComponent from "../conditional-component/ConditionalComponent";
import "./collapsable-card.css";

export default function CollapsableCard({ children, title, initiallyOpen = false, hideTitleOnOpen = false }) {
    const [isOpen, setOpen] = useState(initiallyOpen);
    const onToggleOpen = e => {
        e.preventDefault();
        setOpen(!isOpen);
    };

    const cardContent = <ConditionalComponent condition={isOpen}><div>{children}</div></ConditionalComponent>;

    const arrowClassList = ["open-arrow"];
    if (isOpen) {
        arrowClassList.push("card-open");
    }

    return (
        <div className="collapsable-card">
            <div className="collapsable-card-title" onClick={onToggleOpen}>
                <div className={arrowClassList.join(" ")} >▶</div>
                <ConditionalComponent condition={!isOpen || !hideTitleOnOpen}>{title}</ConditionalComponent>
            </div>
            {cardContent}
        </div>
    )
}
