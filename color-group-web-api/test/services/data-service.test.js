const personAccessor = require("../../src/db/person/person-accessor");
const { isNameTaken, getNames, getGroups, getColors } = require("../../src/services/data-service");

jest.mock("../../src/db/person/person-accessor");

afterEach(() => {
    jest.clearAllMocks();
});

test("isNameTaken() returns false if name is not in database", async () => {
    personAccessor.getPerson.mockResolvedValue(null);
    const result = await isNameTaken("404");

    expect(result).toBe(false);
});

test("isNameTaken() returns true if name is in database", async () => {
    personAccessor.getPerson.mockResolvedValue({ name: "John" });
    const result = await isNameTaken("John");

    expect(result).toBe(true);
});

test("getNames() should return what the database returns", async () => {
    const output = ["name1", "name2"];
    personAccessor.getDistinct.mockResolvedValue(output);

    const result = await getNames();
    expect(result).toEqual(output);
});

test("getGroups() should return what the database returns", async () => {
    const output = ["group1", "group2"];
    personAccessor.getDistinct.mockResolvedValue(output);

    const result = await getGroups();
    expect(result).toEqual(output);
});

test("getColors() should return what the database returns", async () => {
    const output = ["color1", "color2"];
    personAccessor.getDistinct.mockResolvedValue(output);

    const result = await getColors();
    expect(result).toEqual(output);
});
