const express = require ("express");
const router = express.Router();
const signupUser = require("../controllers/userController");

router.post("/register", signupUser);

module.export = router;