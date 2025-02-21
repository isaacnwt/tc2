"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioPequeno = void 0;
var MarioCapa_js_1 = require("./MarioCapa.js");
var MarioFogo_js_1 = require("./MarioFogo.js");
var MarioPequeno = /** @class */ (function () {
    function MarioPequeno() {
    }
    MarioPequeno.prototype.pegarCogumelo = function () {
        console.log("Mario grande");
        return this;
    };
    MarioPequeno.prototype.pegarFlor = function () {
        console.log("Mario grande e Mario com fogo");
        return new MarioFogo_js_1.MarioFogo();
    };
    MarioPequeno.prototype.pegarPena = function () {
        console.log("Mario grande e Mario com capa");
        return new MarioCapa_js_1.MarioCapa();
    };
    MarioPequeno.prototype.levarDano = function () {
        console.log("Mario morreu");
        return new MarioPequeno();
    };
    return MarioPequeno;
}());
exports.MarioPequeno = MarioPequeno;
