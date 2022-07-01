import { render, screen } from "@testing-library/react";
import FilterSelector from "./FilterSelector";

test("FilterSelector should have labels for Group and Filter selection menus", () => {
    render(<FilterSelector groupOptions={[]} filterOptions={{}} />);
    const groupLabel = screen.getByLabelText("Group by", { exact: false });
    expect(groupLabel).toBeInTheDocument();

    const filterLabel = screen.getByLabelText("Filter", { exact: false });
    expect(filterLabel).toBeInTheDocument();
});
