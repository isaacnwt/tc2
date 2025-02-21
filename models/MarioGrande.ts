import { IMarioState } from "./IMarioState.js";
import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";
import { MarioPequeno } from "./MarioPequeno.js";

export class MarioGrande implements IMarioState {

    pegarCogumelo(): IMarioState {
        console.log("Mario ganhou 50 pontos");
        return this;
    }

    pegarFlor(): IMarioState {
        console.log("Mario com fogo");
        return new MarioFogo();
    }

    pegarPena(): IMarioState {
        console.log("Mario com capa");
        return new MarioCapa();
    }

    levarDano(): IMarioState {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}