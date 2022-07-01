const mongoose = require("mongoose");

module.exports.connectColorGroupDb = async (databaseHost) => {
    try {
        await mongoose.connect(`mongodb://${databaseHost}/color-group`);
        console.log("Database connection successful!");
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
};
