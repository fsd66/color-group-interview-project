const { getPerson, getAllPeople, updatePerson, createPerson } = require("../db/person/person-accessor");
const { capitalizeFirstCharacter } = require("../utilities/string-format");

/**
 * Returns the person object whose name matches the input
 * @param {String} name Name of the person, case insensitive
 * @returns {Object} A person object
 */
module.exports.getPerson = async (name) => {
    return await getPerson(name);
};

/**
 * Returns an array of all people
 * @returns {Array} Array of people objects
 */
module.exports.getAllPeople = async () => {
    return await getAllPeople();
};

/**
 * Returns an array of all people associated with a color
 * @param {String} color Name of the color, case insensitive
 * @returns {Array} Array of people objects
 */
module.exports.getAllPeopleWithColor = async (color) => {
    return await getAllPeople({ color });
};

/**
 * Returns an array of all people in a group
 * @param {String} group Name of the group, case insensitive
 * @returns {Array} Array of people objects
 */
module.exports.getAllPeopleInGroup = async (group) => {
    return await getAllPeople({ group });
};

const DEFAULT_PROCESSING = (value) => capitalizeFirstCharacter(value.toLowerCase());

/**
 * Updates a single Person's data
 * Strips out data not meant to be stored in the database and formats saved data to avoid unexpected issues
 * @param {Object} person Object representing what a person's updated data should be
 */
module.exports.updatePerson = async (person, { propertiesToAccept = ["name", "group", "color"], process = DEFAULT_PROCESSING } = {}) => {
    const processedInputs = {};

    for(let i = 0; i < propertiesToAccept.length; i++) {
        const v = propertiesToAccept[i];
        const value = person[v];
        if (value === undefined) {
            return;
        }

        processedInputs[v] = process(value);
    }

    await updatePerson(processedInputs);
};

/**
 * Creates a new Person entry
 * Strips out data not meant to be stored in the database and formats saved data to avoid unexpected issues
 * @param {Object} person Object representing the new person's data
 */
module.exports.createPerson = async (person, { propertiesToAccept = ["name", "group", "color"], process = DEFAULT_PROCESSING } = {}) => {
    const processedInputs = {};

    for(let i = 0; i < propertiesToAccept.length; i++) {
        const v = propertiesToAccept[i];
        const value = person[v];
        if (value === undefined) {
            return;
        }

        processedInputs[v] = process(value);
    }

    await createPerson(processedInputs);
};
