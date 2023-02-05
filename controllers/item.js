const Item = require("../models/Item");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getNewItem: async (req, res) => {
      try {
        res.render("newItem.ejs");
      } catch (err) {
        console.log(err);
      }
    },
    createItem: async (req, res) => {
      try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
  
        await Item.create({
          itemName: req.body.itemName,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          SKU: req.body.SKU,
          notes: '',
          amountInStock: req.body.inStock,
          units: req.body.units,
          status: req.body.status,
          reorderAt: req.body.reorderAt,
          user: req.user.id,
          // itemName: req.body.itemName,
          // image: result.secure_url,
          // cloudinaryId: result.public_id,
          // SKU: req.body.SKU,
          // status: 'In Stock',
          // user: req.user.id,
        });
        console.log("Item has been added!");
        res.redirect("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
};