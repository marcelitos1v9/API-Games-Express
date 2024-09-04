import mongoose from "mongoose";

// Schema para descrições
const descriptionsSchema = new mongoose.Schema({
    genre: String,
    platform: String,  // Corrigindo o nome para "platform" ao invés de "plataform"
    rating: String,
});

// Schema para o jogo
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionsSchema  // Removendo os colchetes para que seja um objeto único
});

// Modelo do jogo
const Game = mongoose.model('Game', gameSchema);

export default Game;
