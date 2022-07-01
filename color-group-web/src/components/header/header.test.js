import { render, screen } from "@testing-library/react";
import ColorGroupHeader from "./ColorGroupHeader";

test("ColorGroupHeader should display the title of the App", () => {
    render(<ColorGroupHeader />);
    const h1Element = screen.getByText("Color/Group Administration Panel");
    expect(h1Element).toBeInTheDocument();
});
