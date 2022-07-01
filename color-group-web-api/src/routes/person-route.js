const express = require("express");

const { getPerson, getAllPeople, getAllPeopleInGroup, getAllPeopleWithColor, updatePerson, createPerson } = require("../services/person-service");

module.exports.getPersonRoutes = () => {
    const router = express.Router();

    router.get("/", async (req, res) => {
        const persons = await getAllPeople();

        res.send({ persons });
    });

    router.get("/name/:name", async (req, res) => {
        const { name } = req.params;
        const person = await getPerson(name);
        res.send({ person });
    });

    router.get("/group/:group", async (req, res) => {
        const { group } = req.params;
        const persons = await getAllPeopleInGroup(group);

        res.send({ persons });
    });

    router.get("/color/:color", async (req, res) => {
        const { color } = req.params;
        const persons = await getAllPeopleWithColor(color);

        res.send({ persons });
    });

    router.post("/update", async (req, res) => {
        const { person } = req.body;
        let success;

        if (person === undefined) {
            success = false;

        } else {
            await updatePerson(person);
            success = true;
        }

        res.send({ success });
    });

    router.post("/create", async (req, res) => {
        const { person } = req.body;
        let success;

        if (person === undefined) {
            success = false;
        } else {
            await createPerson(person);
            success = true;
        }

        res.send({ success });
    });

    return router;
};
