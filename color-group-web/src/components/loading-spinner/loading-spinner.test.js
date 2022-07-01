import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

test("LoadingSpinner to display \"Loading...\"", () => {
    render(<LoadingSpinner />);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
});
