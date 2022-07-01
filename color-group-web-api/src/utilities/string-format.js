/**
 * Captializes the first character of the string without regard for whitespace or other non-alpha characters
 * The input type is not checked
 * @param {String} string Input to be processed
 * @returns {String} The input with the first character capitalized
 */
module.exports.capitalizeFirstCharacter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
