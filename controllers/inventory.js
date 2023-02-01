module.exports = {
    getInventory: async (req, res) => {
      try {
        res.render("inventory.ejs");
      } catch (err) {
        console.log(err);
      }
    },
    
  };