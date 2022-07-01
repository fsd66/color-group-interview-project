const { capitalizeFirstCharacter } = require("../../src/utilities/string-format");

test("capitalizeFirstCharacter() capitalizes the first character of a string", () => {
    expect(capitalizeFirstCharacter("hello world")).toEqual("Hello world");
});

test("capitalizeFirstCharacter() does not change a string beginning in a non-alpha character", () => {
    const testString = " this string starts with a space";
    expect(capitalizeFirstCharacter(testString)).toEqual(testString);
});

test("capitalizeFirstCharacter() does not change a string already beginning in a capitalized letter", () => {
    const testString = "Capitalized String";
    expect(capitalizeFirstCharacter(testString)).toEqual(testString);
});
