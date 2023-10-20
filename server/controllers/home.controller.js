const Home= require('../models/home.model');    /* this is new */

          /* The method below is new */
module.exports.createHome = (request, response) => {
   
    Home.create(request.body)
        .then(home=> response.json(home))
        .catch(err => response.status(400).json(err));
}
module.exports.getLatestHouses = (request, response) => {
  const limit = request.query.limit ?? 4;
    Home.find({}).limit(limit).sort({createdAt: 'desc'})
      .then((home) => {
        console.log(home);
        response.json(home);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  };
  


  module.exports.getHome = (request, response) => {
    Home.findOne({ _id: request.params.id })
      .then((home) => response.json(home))
      .catch((err) => response.json(err));
  };
  module.exports.deleteHome=(request, response) => {
    Home.deleteOne({ _id: request.params.id })
      .then((deleteConfirmation) => response.json(deleteConfirmation))
      .catch((err) => response.json(err));
  }


  // module.exports.updatePost = (request, response) => {
    
  //       Home.findOneAndUpdate({ _id: request.params.id }, request.body, {
  //         new: true,
  //       })
  //         .then((updatePost) => response.json(updatePost))
  //         .catch((err) => response.status(300).json(err));
  //     }

      module.exports.showAllHouses = (request, response) => {
        Home.find({}).sort({createdAt: 'desc'})
          .then((home) => {
            console.log(home);
            response.json(home);
          })
          .catch((err) => {
            console.log(err);
            response.json(err);
          });
      };
    
      module.exports.getAllHomes = (request, response) => {
        Home.find({}).sort({createdAt: 'desc'})
          .then((home) => {
            console.log(home);
            response.json(home);
          })
          .catch((err) => {
            console.log(err);
            response.json(err);
          });
      };
  