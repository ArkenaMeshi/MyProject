const HomeController = require('../controllers/home.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
   
    app.post('/api/home', HomeController.createHome);   
    app.get("/api/home",HomeController.getLatestHouses);
    app.get("/api/houses",HomeController.showAllHouses);
    app.get("/api/home/:id", HomeController.getHome);
}