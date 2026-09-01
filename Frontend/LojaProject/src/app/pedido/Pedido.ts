import { Produto } from '../produto/Produto';

export class Pedido {
    id?: number;
    valorTotal?: number;
    produtos?: Produto[];
}