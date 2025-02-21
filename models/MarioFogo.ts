import { IMarioState } from "./IMarioState.js";
import { MarioCapa } from "./MarioCapa.js";
import { MarioPequeno } from "./MarioPequeno.js";

export class MarioFogo implements IMarioState {

    pegarCogumelo(): IMarioState {
        console.log("Mario ganhou 80 pontos");
        return this;
    }

    pegarFlor(): IMarioState {
        console.log("Ganhou 100 pontos");
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