const routes = require("express").Router();

routes.use("/", require("../controller/UserController"));

module.exports = routes;
