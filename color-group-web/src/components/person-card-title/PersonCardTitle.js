import { parseCSSColor } from "../../utilities/css-color-util";
import ColorSwatch from "../color-swatch/ColorSwatch";
import "./person-card-title.css";

export default function PersonCardTitle({ personData }) {

    return (
        <div className="person-card-title">
            <div><span className="title-category-label">Name: </span><span>{personData.name}</span></div>
            <div><span className="title-category-label">Group: </span><span>{personData.group}</span></div>
            <div><span className="title-category-label">Color: </span><span><ColorSwatch color={personData.color} />{personData.color}</span></div>
        </div>
    );
}
