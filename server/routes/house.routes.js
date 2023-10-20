const HomeController = require("../controllers/home.controller");
// const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
  app.post("/api/home", HomeController.createHome);
  app.get("/api/home", HomeController.getAllHouses);
  app.get("/api/home/:id", HomeController.getHome);
  app.delete("/api/home/:id", HomeController.deleteHome);
};
