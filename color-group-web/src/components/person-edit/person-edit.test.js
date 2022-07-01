const { render, screen } = require("@testing-library/react");
const { default: PersonEdit } = require("./PersonEdit");

test("PersonEdit should have labels for Name, Group, and Color inputs", () => {
    render(<PersonEdit />);
    const nameLabel = screen.getByLabelText("Name", { exact: false });
    expect(nameLabel).toBeInTheDocument();

    const groupLabel = screen.getByLabelText("Group", { exact: false });
    expect(groupLabel).toBeInTheDocument();

    const colorLabel = screen.getByLabelText("Color", { exact: false });
    expect(colorLabel).toBeInTheDocument();
});
