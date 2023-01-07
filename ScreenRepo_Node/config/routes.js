const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/admin/login", require("../controller/AdminController"));
routes.use("/api/ss", require("../controller/UploadController"));

module.exports = routes;
