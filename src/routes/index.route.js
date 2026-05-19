const route = require("express").Router();
const dashboardRoute = require("./dashboard.route")
route.use("/dashboard", dashboardRoute);

module.exports = route;