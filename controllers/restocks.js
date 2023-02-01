module.exports = {
    getRestocks: async (req, res) => {
      try {
        res.render("restocks.ejs");
      } catch (err) {
        console.log(err);
      }
    },
    
  };