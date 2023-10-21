const HomeController = require('../controllers/home.controller');
const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
   
    app.post('/api/home', HomeController.createHome);   
    app.get("/api/home",HomeController.getAllHomes)
    app.get("/api/houses",HomeController.showAllHouses);
    app.get("/api/home/:id", HomeController.getHome);
    app.patch("/api/home/:id/edit", HomeController.updateHome);
    app.delete("/api/home/:id",HomeController.deleteHome)
    app.get("/api/home/search-town",HomeController.searchTown);
}