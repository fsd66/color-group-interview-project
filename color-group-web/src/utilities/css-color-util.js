const isGlobalColorValue = (() => {
    const colorGlobalValues = new Set();
    ["inherit", "initial", "revert", "revert-layer", "unset"].forEach(v => colorGlobalValues.add(v));

    return (color) => colorGlobalValues.has(color?.toLowerCase() ?? "");
})();

module.exports.parseCSSColor = (color, defaultColor = "#000") => {
    const preparedColor = color.replaceAll(/\s/gm, "");
    if (isGlobalColorValue(preparedColor) || !CSS.supports("color", preparedColor)) {
        return defaultColor;
    }

    return preparedColor;
}
