const routes = require("express").Router();
const Upload = require("../models/Upload");

routes.post("/", (req, res) => {
  Upload.create(req.body, (error) => {
    res.send({ success: true });
  });
});
routes.get("/", (req, res) => {
  Upload.find({}, (error, result) => {
    res.send(result);
  });
});

routes.get("/:id", (req, res) => {
  let id = req.params.id;
  Upload.find({ _id: id }, (error, result) => {
    res.send(result[0]);
  });
});
module.exports = routes;
