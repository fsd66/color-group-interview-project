const fs = require("fs");
const path = require("path");

/**
 * Reads a files and attempts to parse it as a JSON
 * @param {String} filePath path to the file to read
 * @returns {Object} Parsed JSON Object
 */
module.exports.readFileAsJSON = (filePath) => {
    return new Promise((resolve, reject) => {
        const resolvedPath = path.resolve(filePath);
        fs.readFile(resolvedPath, (err, data) => {
            if (err) {
                console.error("Error while reading file at", resolvedPath, ":", err);
                return reject(err);
            }

            return resolve(JSON.parse(data));
        });
    });
}
