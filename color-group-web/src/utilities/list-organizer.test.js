const { sortCategories } = require("./list-organizer");

test("sortCategories() should properly sort objects", () => {
    const exampleData = [
        { sortMe: "hello", other: "world" },
        { sortMe: "hello", other: "solar-system" },
        { sortMe: "linus", other: "tech tips" },
        { sortMe: "linus", other: "torvalds" }
    ];

    const sorted = sortCategories(exampleData, "sortMe");

    const expectedData = {
        hello: [
            { sortMe: "hello", other: "world" },
            { sortMe: "hello", other: "solar-system" }
        ],
        linus: [
            { sortMe: "linus", other: "tech tips" },
            { sortMe: "linus", other: "torvalds" }
        ]
    }

    expect(sorted).toEqual(expectedData);
});
