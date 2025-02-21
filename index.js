"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mario_js_1 = require("./models/Mario.js");
var mario = new Mario_js_1.Mario();
console.log(".::Início de partida::.");
console.log("Mario pequeno!");
mario.pegarCogumelo();
mario.pegarFlor();
mario.levarDano();
