/**
 * Creates an object whose keys are the names of unique categories.
 *
 * @param {Array} list Array of objects to categorize
 * @param {String} propertyToCategorize Name of the property each item would be categorized under, if undefined, all list items will be put in 1 category.
 * @param {Object} options
 * @returns {Object} Object whose keys are the names of unique categories, and values are a list of the objects that fall under that category.
 */
module.exports.sortCategories = (list, propertyToCategorize = undefined, { allCategoryName = "All" } = {}) => {
    const output = {};

    if (propertyToCategorize === undefined) {
        output[allCategoryName] = list;
        return output;
    }

    list.forEach(v => {
        const category = v[propertyToCategorize];

        if (output[category] === undefined) {
            output[category] = [];
        }

        output[category].push(v);
    });

    return output;
};
