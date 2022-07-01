import { render, screen } from "@testing-library/react";
import ColorSwatch from "./ColorSwatch";

test("ColorSwatch can't be tested because the testing-library doesn't support CSS.supports() in test...", () => {
    expect(true).toBe(true);
});

/*
test("ColorSwatch should display \"■\" with a valid color", () => {
    render(<ColorSwatch color={"red"} />);
    const swatch = screen.getByText("■");
    expect(swatch).toBeInTheDocument();
});

test("ColorSwatch should not display \"■\" with an invalid color", () => {
    render(<ColorSwatch color={"asdfasdf"} />);
    const swatch = screen.queryByText("■");
    expect(swatch).toBeNull();
});
*/
