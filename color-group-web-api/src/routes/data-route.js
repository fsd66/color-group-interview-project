const express = require("express");
const { getGroups, getColors, getNames, isNameTaken } = require("../services/data-service");

module.exports.getDataRoutes = () => {
    const router = express.Router();

    router.get("/name-taken/:name", async (req, res) => {
        const { name } = req.params;
        const taken = await isNameTaken(name);
        res.send({ taken });
    });

    router.get("/names", async (req, res) => {
        const names = await getNames();
        res.send({ names });
    });

    router.get("/groups", async (req, res) => {
        const groups = await getGroups();
        res.send({ groups });
    });

    router.get("/colors", async (req, res) => {
        const colors = await getColors();
        res.send({ colors });
    });

    return router;
};
