import { Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
    { path: 'pedidos', component: PedidoComponent },
    { path: 'produtos', component: ProdutoComponent }
];
