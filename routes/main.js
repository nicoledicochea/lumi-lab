const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const mainController = require("../controllers/main");
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", mainController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/dashboard", ensureAuth, dashboardController.getDashboard);

module.exports = router;