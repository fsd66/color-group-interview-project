/**
 * Takes the data from an input file, and creates a list of Persons which can be stored in the Database.
 * Example Structure: { Group1: { John: "Blue" } }
 *
 * All of the strings will be converted to all lower-case to make group, people names, and colors case-insensitive.
 *
 * @param {Object} fileData an Object whose keys are Group names and values are Objects whose keys are Names of people and values are Colors as a String
 * @returns {Array} of Persons suitable for storage in the database. Example: [{ name: "john", color: "blue", group: "group1" }]
 */
module.exports.parseColorGroupFile = (fileData) => {
    const persons = [];
    Object.keys(fileData).forEach(group => {
        const person = fileData[group];

        if (person === undefined) {
            // If a group is in the object, but has no definition, then skip that group.
            return;
        }

        Object.keys(person).forEach(name => {
            const color = person[name];

            if (color === undefined) {
                // If a person does not have an associated color, don't include in the output.
                return;
            }

            persons.push({ name, color, group });
        });
    });

    return persons;
};
