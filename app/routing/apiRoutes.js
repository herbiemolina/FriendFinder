const friendsData = require('../data/friends');

module.exports = app => {
  //this tells the client what to show when user hits that specific route
  app.get('/api/friends', (req, res) => {
    res.json(friendsData);
  });

  //this is for adding in data into the arrays
  app.post('/api/friends', (req, res) => {
      friendsData.push(req.body);
      

      
       //this is where the logic for matching user's data
       //it would run through the arrays of users
       //each time it would evaluate the user's answers to those of past users
       //it would then return the name and photo of the profile that is most compatible to them

      
      res.json({
        name: req.body.name,
        photo: req.body.photo
      });
    
    
  });
};
