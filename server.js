const express = require("express");
const errorHandler = require("./src/middlewares/error-handler.middleware");
const { NotFound } = require("./src/middlewares/error.middleware");
const FileData = require("./src/helpers/get-files-in-directory.helper");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        dotenv.config();
        this.app.set("port", process.env.PORT || 8000);
        this.app.use(helmet());
        this.app.use(morgan("dev"));
        this.app.use(cors(this.configCors));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    configCors(req, callback) {
        const environment = process.env.APP_ENVIRONMENT;
        const stateAplication = ['test', 'development'];
        const allowList = stateAplication.includes(environment) ? ["http://localhost:3000"] : ["https://akcardona-63d3d.web.app"];

        let corsOptions = { origin: false };
        if (allowList.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true };
        } else {
            corsOptions = { origin: false };
        }
        callback(null, corsOptions);

    }

    routes() {
        const fileData = new FileData()
        const routeList = fileData.getFilesName("./src/routes/");
        routeList.forEach((fileData) => {
            const pathFileRoute = `./src/routes/${fileData.fileName}`;
            require(pathFileRoute)(this.app);
        });

        this.app.get("/api", (req, res) => {
            res.status(200).send("Welcome to the API BRIEFCASE...🚧🚧🌈🚀🚧🚧");
        });

        this.app.use(function (req, res, next) {
            throw new NotFound("Unable to find the requested resource!");
        });

        this.app.use(errorHandler);
    }

    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("\nAPI: API BRIEFCASE");
            console.log(`STATUS API: ${process.env.APP_ENVIRONMENT === 'production' ? "PRODUCTION" : process.env.APP_ENVIRONMENT === 'development' ? 'DEVELOPMENT' : 'TESTING'}`);
            console.log(`Port: ${this.app.get("port")}\n`);
        });
    }
}

const server = new Server();
exports.default = server;
