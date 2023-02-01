const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const mainController = require("../controllers/main");
const dashboardController = require("../controllers/dashboard");
const inventoryController = require("../controllers/inventory");
const restocksController = require("../controllers/restocks");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", mainController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/dashboard", ensureAuth, dashboardController.getDashboard);
router.get("/inventory", ensureAuth, inventoryController.getInventory);
router.get("/restocks", ensureAuth, restocksController.getRestocks);

module.exports = router;