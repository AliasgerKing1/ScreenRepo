const routes = require("express").Router();
const User = require("../models/User");

routes.post("/", (req, res) => {
  User.create(req.body, (error) => {
    res.send({ success: true });
  });
});
routes.get("/", (req, res) => {
  User.find({}, (error, result) => {
    res.send(result);
  });
});
routes.delete("/:id", (req, res) => {
  let id = req.params.id;
  User.deleteMany({ _id: id }, (error, result) => {
    res.send({ success: true });
  });
});
routes.put("/:id", (req, res) => {
  let id = req.params.id;
  User.updateMany({ _id: id }, (error, result) => {
    res.send({ success: true });
  });
});
routes.get("/:id", (req, res) => {
  let id = req.params.id;
  User.find({ _id: id }, (error, result) => {
    res.send({ success: true });
  });
});

module.exports = routes;
