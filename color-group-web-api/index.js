const { setupDatabase } = require("./src/services/database-service");
const apiServer = require("./src/server");

async function main(argv) {
    await setupDatabase({ databaseHost: process.env.DB_HOST, checkForFirstRun: true, seedFilePath: process.env.SEED_FILE });
    await apiServer.startApiServer(process.env.PORT, { origin: process.env.WEB_APP_ORIGIN });
}

main(process.argv).catch(err => console.error(err));
