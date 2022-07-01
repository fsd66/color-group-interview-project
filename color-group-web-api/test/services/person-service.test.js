const personAccessor = require("../../src/db/person/person-accessor");
const { updatePerson, createPerson, getPerson, getAllPeople, getAllPeopleWithColor, getAllPeopleInGroup } = require("../../src/services/person-service");

jest.mock("../../src/db/person/person-accessor");

afterEach(() => {
    jest.clearAllMocks();
});

test("getPerson() should return what the database returns", async () => {
    const output = { name: "test", group: "group", color: "color" };
    personAccessor.getPerson.mockResolvedValue(output);
    const result = await getPerson("test");
    expect(result).toEqual(output);
});

test("getAllPeople() should return what the database returns", async () => {
    const output = [{ name: "test", group: "group", color: "color" }];
    personAccessor.getAllPeople.mockResolvedValue(output);
    const result = await getAllPeople();
    expect(result).toEqual(output);
});

test("getAllPeopleWithColor() should return what the database returns", async () => {
    const output = [{ name: "test", group: "group", color: "color1" }];
    personAccessor.getAllPeople.mockResolvedValue(output);
    const result = await getAllPeopleWithColor("color1")
    expect(result).toEqual(output);
});

test("getAllPeopleInGroup() should return what the database returns", async () => {
    const output = [{ name: "test", group: "group1", color: "color" }];
    personAccessor.getAllPeople.mockResolvedValue(output);
    const result = await getAllPeopleInGroup("group1")
    expect(result).toEqual(output);
});

test("updatePerson() should call an update to the database", async () => {
    personAccessor.updatePerson.mockResolvedValue(null);

    await updatePerson({ name: "test name", group: "group", color: "color" });
    expect(personAccessor.updatePerson.mock.calls.length).toBe(1);
});

test("updatePerson() should not call an update to the database with bad input", async () => {
    personAccessor.updatePerson.mockResolvedValue(null);

    await updatePerson({ name: "missing group and color" });
    expect(personAccessor.updatePerson.mock.calls.length).toBe(0);
});

test("createPerson() should call a create to the database", async () => {
    personAccessor.createPerson.mockResolvedValue(null);

    await createPerson({ name: "test name", group: "group", color: "color" });
    expect(personAccessor.createPerson.mock.calls.length).toBe(1);
});

test("createPerson() should not call a create to the database with bad input", async () => {
    personAccessor.createPerson.mockResolvedValue(null);

    await createPerson({ name: "missing group and color" });
    expect(personAccessor.createPerson.mock.calls.length).toBe(0);
});
