const { parseColorGroupFile } = require("../../src/services/parsing-service");

test("parseColorGroupFile() should correctly parse data object", () => {
    const testData = {
        Group1: {
            John: "Blue",
            Peter: "Green"
        }
    };

    const expectedOutput = [
        { name: "John", group: "Group1", color: "Blue" },
        { name: "Peter", group: "Group1", color: "Green" }
    ];

    const output = parseColorGroupFile(testData);
    expect(output).toEqual(expectedOutput);
});
