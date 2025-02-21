import { IMarioState } from "./IMarioState.js";
import { MarioPequeno } from "./MarioPequeno.js";

export class Mario {
    estado: IMarioState;

    constructor() {
        this.estado = new MarioPequeno();
    }

    mudarStatus(estado: IMarioState) {
        this.estado=estado;
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