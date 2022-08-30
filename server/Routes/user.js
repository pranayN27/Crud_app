const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

//API

route.post("/", controller.create);
route.get("/", controller.find);
route.get("/:id", controller.find);
route.put("/:id", controller.update);
route.delete("/:id", controller.delete);

module.exports = route;
