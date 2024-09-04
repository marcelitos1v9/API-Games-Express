import Game from "../models/Games.js";

class gameService {
  //Padrão async/await
  //Método para Buscar Todos os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  //Metodo para cadastrar
  async Create(title, year, price,descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  //Metodo para Deletar
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
  //Metodo para Alterar um Jogo
  async Update(id, title, year, price,descriptions) {
    try {
      await Game.findByIdAndUpdate(id, {
        //title : title
        title,
        year,
        price,
        descriptions,
      });
      console.log("Dados do game com id: ${id} alterado com suecesso!");
    } catch (error) {
      console.log(error);
    }
  }
  //metodo para listar um único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({_id : id})
      return game
    } catch (error) {
      console.log(error)
    }
  }
}

export default new gameService();
