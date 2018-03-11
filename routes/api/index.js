const router = require("express").Router();
const missingPersonsRoutes = require("./missingPersons");
// missing persons routes

router.use("/missingPersons", missingPersonsRoutes);


module.exports = router;