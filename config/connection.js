const router = require("express").Router();
const userRoutes = require("../routes/api/user-routes");
//const thoughtRoutes = require("./thoughtRoutes");

router.use("/users", userRoutes);