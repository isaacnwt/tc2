import { IMarioState } from "./IMarioState";
import { MarioPequeno } from "./MarioPequeno";

export class Mario {
    estado: IMarioState;

    constructor() {
        this.estado = new MarioPequeno();
    }

    public pegarCogumelo(): void {
        this.estado.pegarCogumelo();
    }
    
    public pegarFlor(): void {
        this.estado.pegarFlor();
    }
    
    public pegarPena(): void {
        this.estado.pegarPena();
    }
    public levarDano(): void {
        this.estado.levarDano();
    }
}