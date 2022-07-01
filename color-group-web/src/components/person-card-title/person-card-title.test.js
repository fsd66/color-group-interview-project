import { render, screen } from "@testing-library/react";
import PersonCardTitle from "./PersonCardTitle";

test("PersonCardTitle should have a display for the name, group, and color", () => {
    render(<PersonCardTitle personData={{ name: "test", group: "test", color: "inherit" }} />);
    const nameText = screen.getByText("Name", { exact: false });
    expect(nameText).toBeInTheDocument();

    const groupText = screen.getByText("Group", { exact: false });
    expect(groupText).toBeInTheDocument();

    const colorText = screen.getByText("Color", { exact: false });
    expect(colorText).toBeInTheDocument();
});
