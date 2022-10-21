const router = require("express").Router();
const apiRouters = require("./api");

router.use("/api", apiRouters);

router.use((req, res) => res.send("Incorrect route"));

module.exports = router;