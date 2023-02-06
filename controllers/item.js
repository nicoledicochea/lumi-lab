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
        res.redirect("/inventory");
      } catch (err) {
        console.log(err);
      }
    },
    getItem: async (req, res) => {
      try {
        const item = await Item.findById(req.params.id);
        res.render("item.ejs", { item: item, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    changeQuantity: async (req, res) => {
      try {
        await Item.findOneAndUpdate(
          { _id: req.params.id },
          {
            amountInStock: parseInt(req.body.inStock),
          }
        );
        console.log("Quantity Updated");
        res.redirect(`/item/${req.params.id}`);
      } catch (err) {
        console.log(err);
      }
    },
    changeReorderAt: async (req, res) => {
      try {
        await Item.findOneAndUpdate(
          { _id: req.params.id },
          {
            reorderAt: parseInt(req.body.reorderAt),
          }
        );
        console.log("Reorder At Updated");
        res.redirect(`/item/${req.params.id}`);
      } catch (err) {
        console.log(err);
      }
    },
    changeUnits: async (req, res) => {
      try {
        await Item.findOneAndUpdate(
          { _id: req.params.id },
          {
            units: req.body.units,
          }
        );
        console.log("Quantity Updated");
        res.redirect(`/item/${req.params.id}`);
      } catch (err) {
        console.log(err);
      }
    },
    deleteItem: async (req, res) => {
      try {
        // Find item by id
        let item = await Item.findById({ _id: req.params.id });
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(item.cloudinaryId);
        // Delete item from db
        await Item.deleteOne({ _id: req.params.id });
        console.log("Deleted Item");
        res.redirect("/dashboard");
      } catch (err) {
        res.redirect("/dashboard");
      }
    },
};