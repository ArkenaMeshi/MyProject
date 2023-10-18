const HomeController = require('../controllers/home.controller');
module.exports = (app) => {
   
    app.post('/api/home', HomeController.createHome);   
    app.get("/api/home", HomeController.getAllHouses);
}
