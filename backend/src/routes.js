const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.post("/Usuario", UserController.store);

routes.get("/Usuario", UserController.list);

routes.get("/UsuarioId/:id", UserController.index);

routes.put("/UsuarioId/:id", UserController.update);

routes.delete("/UsuarioId/:id", UserController.destroy);

module.exports = routes;
