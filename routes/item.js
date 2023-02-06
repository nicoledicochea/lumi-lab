const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const authController = require("../controllers/auth");
const itemController = require("../controllers/item");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/newItem", ensureAuth, itemController.getNewItem);

router.get("/:id", ensureAuth, itemController.getItem);

router.post("/createItem", upload.single("itemImage"), itemController.createItem);

router.put("/changeQuantity/:id", itemController.changeQuantity);

router.put("/changeReorderAt/:id", itemController.changeReorderAt);

router.put("/changeUnits/:id", itemController.changeUnits);

module.exports = router;