import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

//Rotas - endpoints
//Endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

//Endpoint para cadastrar um novo jogo
gameRoutes.post("/game", gameController.createGame);

//Endpoint para deletar um jogo
gameRoutes.delete("/game/:id", gameController.deleteGame)

//Endpoint para alterar um jogo
gameRoutes.put("/game/:id", gameController.updateGame)

//Endpoint para Listar um único Jogo
gameRoutes.get("/game/:id", gameController.getOneGame)

export default gameRoutes