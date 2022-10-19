const router = require("express").Router();
const userRoutes = require("./userRouters");
const thoughtRoutes = require("./thoughtRoutes");

router.use("/users", userRoutes);