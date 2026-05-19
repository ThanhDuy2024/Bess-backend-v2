const route = require("express").Router();
const dashboardController = require("../controllers/dashboard.controller");

route.get("/", dashboardController.dashboardController);

module.exports = route;