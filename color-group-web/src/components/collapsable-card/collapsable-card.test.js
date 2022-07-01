import { render, screen } from "@testing-library/react";
import CollapsableCard from "./CollapsableCard";

test("CollapsableCard should have \"▶\" button", () => {
    render(<CollapsableCard></CollapsableCard>);
    const arrowDiv = screen.getByText("▶");
    expect(arrowDiv).toBeInTheDocument();
});

test("CollapsableCard should display child content when open", () => {
    render(<CollapsableCard initiallyOpen={true}>test</CollapsableCard>);
    const childrenDiv = screen.getByText("test");
    expect(childrenDiv).toBeInTheDocument();
});

test("CollapsableCard should not display child content when closed", () => {
    render(<CollapsableCard initiallyOpen={false}>test</CollapsableCard>);
    const childrenDiv = screen.queryByText("test");
    expect(childrenDiv).toBeNull();
});
