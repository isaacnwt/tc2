"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioCapa = void 0;
var MarioFogo_js_1 = require("./MarioFogo.js");
var MarioPequeno_js_1 = require("./MarioPequeno.js");
var MarioCapa = /** @class */ (function () {
    function MarioCapa() {
    }
    MarioCapa.prototype.pegarCogumelo = function () {
        console.log("Mario ganhou 100 pontos");
        return this;
    };
    MarioCapa.prototype.pegarFlor = function () {
        console.log("Mario com fogo");
        return new MarioFogo_js_1.MarioFogo();
    };
    MarioCapa.prototype.pegarPena = function () {
        console.log("Ganhou 100 pontos");
        return new MarioCapa();
    };
    MarioCapa.prototype.levarDano = function () {
        console.log("Mario pequeno");
        return new MarioPequeno_js_1.MarioPequeno();
    };
    return MarioCapa;
}());
exports.MarioCapa = MarioCapa;
