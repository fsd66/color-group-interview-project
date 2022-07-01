const path = require("path");
const { readFileAsJSON } = require("../../src/utilities/file-reader");

test("readFileAsJSON() should read the test JSON file", async () => {
    const fileData = await readFileAsJSON(path.join(__dirname, "test-file.json"));
    expect(fileData).toEqual({ hello: "world" });
});

test("readFileAsJSON() should not read a file that doesn't exist", async () => {
    try {
        await readFileAsJSON(path.join(__dirname, "file-404.json"));
    } catch (e) {
        expect(e).toBeDefined();
    }
});
