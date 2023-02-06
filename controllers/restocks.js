const Item = require("../models/Item");

module.exports = {
    getRestocks: async (req, res) => {
      try {
        const items = await Item.find({ user: req.user.id, status: { $ne: 'In Stock' } }).sort([['status', 'ascending']])
        res.render("restocks.ejs", { items: items, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    
  };