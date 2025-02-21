import { IMarioState } from "./IMarioState.js";
import { MarioFogo } from "./MarioFogo.js";
import { MarioPequeno } from "./MarioPequeno.js";

export class MarioCapa implements IMarioState {

    pegarCogumelo(): IMarioState {
        console.log("Mario ganhou 100 pontos");
        return this;
    }

    pegarFlor(): IMarioState {
        console.log("Mario com fogo");
        return new MarioFogo();
    }

    pegarPena(): IMarioState {
        console.log("Ganhou 100 pontos");
        return new MarioCapa();
    }
    
    levarDano(): IMarioState {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}