"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioFogo = void 0;
var MarioCapa_js_1 = require("./MarioCapa.js");
var MarioPequeno_js_1 = require("./MarioPequeno.js");
var MarioFogo = /** @class */ (function () {
    function MarioFogo() {
    }
    MarioFogo.prototype.pegarCogumelo = function () {
        console.log("Mario ganhou 80 pontos");
        return this;
    };
    MarioFogo.prototype.pegarFlor = function () {
        console.log("Ganhou 100 pontos");
        return new MarioFogo();
    };
    MarioFogo.prototype.pegarPena = function () {
        console.log("Mario com capa");
        return new MarioCapa_js_1.MarioCapa();
    };
    MarioFogo.prototype.levarDano = function () {
        console.log("Mario pequeno");
        return new MarioPequeno_js_1.MarioPequeno();
    };
    return MarioFogo;
}());
exports.MarioFogo = MarioFogo;
