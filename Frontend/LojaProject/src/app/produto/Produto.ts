import { Pedido } from '../pedido/Pedido';

export class Produto {
    id?: number
    nome?: string
    preco?: number
    pedidos?: Pedido[]
}