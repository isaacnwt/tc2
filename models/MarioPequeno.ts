import { IMarioState } from "./IMarioState.js";
import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";

export class MarioPequeno implements IMarioState {

    pegarCogumelo(): IMarioState {
        console.log("Mario ganhou 1000 pontos");
        return this;
    }

    pegarFlor(): IMarioState {
        console.log("Mario com fogo. Ganhou 100 pontos");
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