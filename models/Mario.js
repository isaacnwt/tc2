"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mario = void 0;
var MarioPequeno_js_1 = require("./MarioPequeno.js");
var Mario = /** @class */ (function () {
    function Mario() {
        this.estado = new MarioPequeno_js_1.MarioPequeno();
    }
    Mario.prototype.mudarStatus = function (estado) {
        this.estado = estado;
    };
    Mario.prototype.pegarCogumelo = function () {
        this.estado.pegarCogumelo();
    };
    Mario.prototype.pegarFlor = function () {
        this.estado.pegarFlor();
    };
    Mario.prototype.pegarPena = function () {
        this.estado.pegarPena();
    };
    Mario.prototype.levarDano = function () {
        this.estado.levarDano();
    };
    return Mario;
}());
exports.Mario = Mario;
