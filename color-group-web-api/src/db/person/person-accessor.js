const { setTimeout } = require("node:timers/promises");
const PersonModel = require("./person-model");

/**
 * Returns the person object whose name matches the input
 * @param {String} name Name of the person
 * @returns {Object} A person object
 */
 module.exports.getPerson = async (name) => {
    const person = await PersonModel.findOne({ name }).exec();

    return person;
};

/**
 * Returns an array of all people
 * @param {Object} filter An object that lets you filter results
 * @returns {Array} Array of people objects
 */
module.exports.getAllPeople = async (filter = {}) => {
    const people = await PersonModel.find(filter).exec();
    return people;
};

module.exports.getDistinct = async (field, filter = {}) => {
    const distinct = await PersonModel.distinct(field, filter).exec();
    return distinct;
};

/**
 * Updates an existing Person, a person's name cannot be updated.
 * @param {Object} person The name property identifies the person to be updated, all other properties are used to update the person
 */
module.exports.updatePerson = async ({ name, ...updateData}) => {
    await PersonModel.updateOne({ name }, updateData);
};

module.exports.createPerson = async (person) => {
    await PersonModel.create(person);
};

/**
 * **DANGEROUS FUNCTION**
 *
 * Seeds the database with Person data if there aren't any Persons already in the database.
 * This is meant to seed the database on first run when there is no data in the database.
 *
 * If you set `dangerouslyOverwriteDatabaseWithSeedData` in the options argument to true,
 * you will overwrite all Person data existing in the database with the new data.
 * Make sure that is what you intended.
 *
 * As an additional safety measure, there is a `delayBeforeDestroyingDataMillis` which will give you some time to shut down the software before the database is wiped.
 *
 * @param {Array} people
 * @param {Object} options
 */
module.exports.seedPersonData = async (people, { dangerouslyOverwriteDatabaseWithSeedData = false, delayBeforeDestroyingDataMillis = 5000 } = {}) => {
    const existingData = await this.getAllPeople();

    if (existingData.length > 0) {
        if (dangerouslyOverwriteDatabaseWithSeedData) {
            console.log(`WARNING: OVERWRITING PERSON DATA WITH SEED DATA IN ${delayBeforeDestroyingDataMillis / 1000} SECONDS!!!`);
            await setTimeout(delayBeforeDestroyingDataMillis);
            console.log("Deleting data...");
            const { deletedCount } = await PersonModel.deleteMany({}).exec();
            console.log(`${deletedCount} entries deleted.`);

        } else {
            console.log("Existing data found in database...Aborting seeding operation.");
            return false;
        }
    }

    await PersonModel.insertMany(people);
    return true;
}
