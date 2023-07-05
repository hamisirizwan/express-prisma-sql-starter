const express = require("express")
const { register, login } = require("../controllers/users")
const router = express.Router()


router.get("/register", register)
router.get("/login", login)

module.exports = router;
