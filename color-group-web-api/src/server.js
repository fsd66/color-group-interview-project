const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const { getPersonRoutes } = require("./routes/person-route");
const { getDataRoutes } = require("./routes/data-route");

module.exports.startApiServer = async (port, { origin = "http://localhost:3000" } = {}) => {
    const app = express();

    // Security Stuff
    app.use(helmet());
    app.disable("x-powered-by");
    app.use(cors({ origin, optionsSuccessStatus: 200 })); // CORS stuff, a "real" application should not use "localhost" as an allowed origin.

    app.use(bodyParser.json()); // Parse JSON API calls

    // Routes
    app.use("/person", getPersonRoutes());
    app.use("/data", getDataRoutes());

    // Error handling
    app.use((req, res, next) => {
        res.status(404).send("Error 404");
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send("Error 500");
    });

    app.listen(port, () => console.log(`API Server listening on port: ${port}`));
};
