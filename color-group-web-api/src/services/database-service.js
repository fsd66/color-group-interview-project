const { connectColorGroupDb } = require("../db/db");
const { seedPersonData } = require("../db/person/person-accessor");
const { readFileAsJSON } = require("../utilities/file-reader");
const { parseColorGroupFile } = require("./parsing-service");

/**
 * Initializes the database by establishing a connection, and seeding the database if it is empty.
 * The seeding process can be skipped by setting the `checkForFirstRun` option to `false`.
 * An error will be thrown if the `seedFilePath` does not point to an actual JSON file and `checkForFirstRun` is `true`.
 *
 * @param {Object} options
 */
module.exports.setupDatabase = async ({ databaseHost, checkForFirstRun, seedFilePath }) => {
    await connectColorGroupDb(databaseHost);

    if (checkForFirstRun) {
        const seedData = await readFileAsJSON(seedFilePath);
        const persons = parseColorGroupFile(seedData);

        seedPersonData(persons);
    }
};
