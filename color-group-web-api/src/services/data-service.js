const { getDistinct, getPerson } = require("../db/person/person-accessor");

/**
 * Checks if a name already exists in the database, and if so, considers the name taken
 * The database returns `null` if it was unable to find a matching entry
 * @param {String} name the name to check
 * @returns {Boolean} true if the name already exists in the database, false if it does not
 */
module.exports.isNameTaken = async (name) => {
    const person = await getPerson(name);
    return person !== null;
};

/**
 * Gets a list of distinct names in the database
 * @returns {Array} list of distinct names
 */
module.exports.getNames = async () => {
    const distinctNames = await getDistinct("name");
    return distinctNames;
};

/**
 * Gets a list of distinct groups in the database
 * @returns {Array} list of distinct groups
 */
module.exports.getGroups = async () => {
    const distinctGroups = await getDistinct("group");
    return distinctGroups;
};

/**
 * Gets a list of distinct colors in the database
 * @returns {Array} list of distinct colors
 */
module.exports.getColors = async () => {
    const distinctColors = await getDistinct("color");
    return distinctColors;
};
