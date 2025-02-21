import { IMarioState } from "./IMarioState.js";
import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";

export class MarioPequeno implements IMarioState {

    pegarCogumelo(): IMarioState {
        console.log("Mario grande");
        return this;
    }

    pegarFlor(): IMarioState {
        console.log("Mario grande e Mario com fogo");
        return new MarioFogo();
    }

    pegarPena(): IMarioState {
        console.log("Mario grande e Mario com capa");
        return new MarioCapa();
    }
    
    levarDano(): IMarioState {
        console.log("Mario morreu");
        return new MarioPequeno();
    }
}