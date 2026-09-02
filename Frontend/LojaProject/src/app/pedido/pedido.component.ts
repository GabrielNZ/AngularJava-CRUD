import { Component } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './Pedido';
import { AccordionModule } from 'primeng/accordion';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Produto } from '../produto/Produto';

@Component({
  selector: 'app-pedido',
  imports: [AccordionModule, DataViewModule, ButtonModule, CommonModule, ConfirmPopupModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss',
  providers: [ConfirmationService]
})
export class PedidoComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
      },
      error: (error) => {
        console.error('Error fetching pedidos:', error?.error?.message);
      }
    });
  }
  deletarProdutoPedido(pedido: Pedido, produto: Produto) {
    pedido.produtos = pedido.produtos?.filter(p => p.id !== produto.id);

    this.pedidoService.atualizarPedido(pedido.id!, pedido).subscribe({
      next: () => {
        alert('Produto removido do pedido com sucesso!');
      },
      error: (error) => {
        alert(`Erro ao remover produto: ${error?.error?.message ?? ''}`);
      }
    });
  }
}
