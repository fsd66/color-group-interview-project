import { parseCSSColor } from "../../utilities/css-color-util"
import ConditionalComponent from "../conditional-component/ConditionalComponent";

import "./color-swatch.css";

export default function ColorSwatch({ color, defaultColor = "inherit" }) {
    const parsedColor = parseCSSColor(color, defaultColor);
    return <ConditionalComponent condition={parsedColor !== defaultColor}><span className="swatch-outline" style={{ color: parsedColor }}>■</span></ConditionalComponent>
}
