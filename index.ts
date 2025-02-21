import { Mario } from "./models/Mario.js";
import { MarioCapa } from "./models/MarioCapa.js";

const mario = new Mario();
console.log(".::Início de partida::.");
console.log("Mario pequeno!");
mario.pegarCogumelo();
mario.pegarFlor();
mario.levarDano();