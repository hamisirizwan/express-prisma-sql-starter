const express = require("express")
const router = express.Router()
const userRoutes = require("./user")


router.use("/users", userRoutes)


module.exports = router;
