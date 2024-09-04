import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

//Buscando jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
    //Cód status 200 (ok)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
//cadastrando jogos
const createGame = async (req, res) => {
  try {
    //Desestruturação
    const { title, year, price,descriptions } = req.body;
    await gameService.Create(title, year, price,descriptions);
    res.sendStatus(201); //Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
//deletando um jogo
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400); //bad request : requisicção mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}

//Alterando o Jogo
const updateGame = async(req, res) => {
  try {
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id
      //DESESTRUTURAÇÃO
      // const title = req.body.title
      const {title, year, price,descriptions} = req.body
      await gameService.Update(id, title, year, price,descriptions)
      res.sendStatus(200) //Código 200 - OK
    } else {
      res.sendStatus(400) //Código 400 - BAD REQUEST
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Erro interno no servidor!"});
  }
};
const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);
      if (!game) {
        res.sendStatus(404); // Código 404: NOT FOUND - Jogo não encontrado
      } else {
        res.status(200).json({ game }); // Aqui o status está correto
      }
    } else {
      res.sendStatus(400); // Código 400: BAD REQUEST - Requisição inválida
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" }); // Código 500: Internal Server Error
  }
};


export default { getAllGames, createGame, deleteGame, updateGame, getOneGame};
