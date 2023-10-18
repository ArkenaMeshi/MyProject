const Home= require('../models/home.model');    /* this is new */

          /* The method below is new */
module.exports.createHome = (request, response) => {
   
    Home.create(request.body)
        .then(home=> response.json(home))
        .catch(err => response.json(err));
}
module.exports.getAllHouses = (request, response) => {
    Home.find({})
      .then((home) => {
        console.log(home);
        response.json(home);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  };

