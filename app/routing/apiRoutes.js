const friendsData = require('../data/friends');

module.exports = app => {
  //this tells the client what to show when user hits that specific route
  app.get('/api/friends', (req, res) => {
    res.json(friendsData);
  });

  //this is for adding in data into the arrays
  app.post('/api/friends', (req, res) => {
      friendsData.push(req.body);
      

      
       

      
      res.json({
        name: req.body.name,
        photo: req.body.photo
      });
    
    
  });
};
