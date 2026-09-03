import { Component } from '@angular/core';
import { Produto } from './Produto';
import { ProdutoService } from './produto.service';
import { SplitterModule } from 'primeng/splitter';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-produto',
  imports: [SplitterModule, DataView, ButtonModule, CommonModule, FloatLabelModule, InputTextModule, FormsModule, AccordionModule, CardModule, FloatLabel, InputNumber, ReactiveFormsModule, ConfirmPopupModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
  providers: [ConfirmationService]
})
export class ProdutoComponent {
  produto: Produto = new Produto();
  produtos: Produto[] = [];
  produtosComprados: Produto[] = [];
  items: MenuItem[] | undefined;
  produtosForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required)
  });
  atualizar: boolean = false;

  constructor(private produtoService: ProdutoService, private pedidoService: PedidoService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.atualizar = false;
    this.getProdutos();
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' }
    ];
    this.produtosComprados = []
  }
  getProdutos() {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
    });
  }
  adicionarProduto() {
    if (!this.produtosForm.valid) {
      return;
    }
    this.produto = {
      nome: this.produtosForm.value.nome,
      preco: this.produtosForm.value.preco
    };
    this.produtosForm.reset();
    this.produtoService.postProdutos(this.produto).subscribe({
      next: (produto) => {
        this.produtos.push(produto);
      },
      error: (error) => {
        alert('Erro ao adicionar produto: ' + error.error?.message);
      }
    });
    this.produto = new Produto();
  }
  atualizarProduto() {
    this.produto = {
      id: this.produto.id,
      nome: this.produtosForm.value.nome,
      preco: this.produtosForm.value.preco,
    };
    this.produtoService.putProduto(this.produto).subscribe({
      next: () => {
        this.getProdutos();
      }, error: (error) => {
        alert('Erro ao atualizar produto: ' + error.error?.message);
      }
    });
    this.produto = new Produto();
    this.atualizar = false;
    this.produtosForm.reset();
  }
  solicitarAtualizarProduto(produto: Produto) {
    this.atualizar = true;
    this.produto = produto;
    this.produtosForm.setValue({
      nome: produto.nome,
      preco: produto.preco
    })
  }
  deletarProduto(id: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja deletar este produto?',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      rejectButtonStyleClass: 'p-button-text p-button-sm',
      accept: () => {
        this.produtoService.deleteProduto(id).subscribe({
          next: () => {
            this.getProdutos();
          },
          error: (error) => {
            alert('Erro ao deletar produto: ' + error.error?.message);
          }
        });
      },
      reject: () => {

      }
    });
  }
  comprarProduto(id: number) {
    this.produtos.forEach((produto) => {
      if (produto.id === id) {
        produto.comprado = true;
        this.produtosComprados.push(produto);
      }
    });
  }
  removerProduto(id: number) {
    this.produtos.forEach((produto) => {
      if (produto.id === id) {
        produto.comprado = false;
        this.produtosComprados.forEach((produtoComprado, index) => {
          if (produtoComprado.id === id) {
            this.produtosComprados.splice(index, 1);
          }
        });
      }
    });
  }
  submit() {
    if (this.produtosComprados.length === 0) {
      alert('Nenhum produto selecionado para compra.');
      return;
    } else {
      const p = {
        valorTotal: this.produtosComprados.reduce((total, produto) => total + (produto.preco || 0), 0),
        produtos: this.produtosComprados
      }
      this.pedidoService.postPedido(p).subscribe({
        next: (data) => {
          alert('Pedido realizado com sucesso!');
        },
        error: (error) => {
          alert('Erro ao realizar pedido: ' + error.error?.message);
        }
      })
    }
    this.produtosComprados = [];
    this.getProdutos();
  }
}
