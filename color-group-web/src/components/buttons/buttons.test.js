import { render, screen } from "@testing-library/react";
import BaseButton from "./BaseButton";
import CancelButton from "./CancelButton";
import CreateButton from "./CreateButton";
import NewButton from "./NewButton";
import UpdateButton from "./UpdateButton";

test("BaseButton displays with provided text", () => {
    render(<BaseButton value={"test"} />);
    const button = screen.getByDisplayValue("test");
    expect(button).toBeInTheDocument();
});

test("CancelButton displays the text: \"✖ Cancel\"", () => {
    render(<CancelButton />);
    const button = screen.getByDisplayValue("✖ Cancel");
    expect(button).toBeInTheDocument();
});

test("CreateButton displays the text: \"✚ Create\"", () => {
    render(<CreateButton />);
    const button = screen.getByDisplayValue("✚ Create");
    expect(button).toBeInTheDocument();
});

test("NewButton displays the text: \"✚ New Person\"", () => {
    render(<NewButton />);
    const button = screen.getByDisplayValue("✚ New Person");
    expect(button).toBeInTheDocument();
});

test("UpdateButton displays the text: \"⭮ Update\"", () => {
    render(<UpdateButton />);
    const button = screen.getByDisplayValue("⭮ Update");
    expect(button).toBeInTheDocument();
});
