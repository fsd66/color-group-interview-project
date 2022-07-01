const mongoose = require("mongoose");

/**
 * A person has a color, and belongs to a single group.
 * This assumes that a person will not belong to multiple groups, and will only be associated with one color.
 * This structure also avoids storing unbounded arrays which is a best practice.
 */
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    group: { type: String, required: true}
}, { collation: { locale: "en", strength: 2 } });

module.exports = mongoose.model("person", personSchema);

