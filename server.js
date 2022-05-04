// const dotenv  = require('dotenv');
// const app = require('./app');

// dotenv.config();
// const PORT = process.env.PORT || 8000;

// //Run server
// console.log("\nAPI: API MODA JEM");
// console.log(`STATUS API: ${process.env.APP_ENVIROMENT === 'prod'? "PRODUCTION" : 
// process.env.APP_ENVIROMENT === 'dev' ? 'DEVELOPMENT' : 'TESTING' }`);
// console.log(`Port: ${PORT}\n`);

// app.listen(PORT);

const server = require("./app");

function main() {
  server.default.start();
}

main();
