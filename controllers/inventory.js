const Item = require("../models/Item");

module.exports = {
    getInventory: async (req, res) => {
      try {
        const items = await Item.find({ user: req.user.id });
        res.render("inventory.ejs", { items: items, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    
  };