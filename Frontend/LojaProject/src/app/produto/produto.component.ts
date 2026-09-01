import { Component } from '@angular/core';
import { Produto } from './Produto';
import { ProdutoService } from './produto.service';
import { SplitterModule } from 'primeng/splitter';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-produto',
  imports: [SplitterModule, DataView, ButtonModule, Tag, CommonModule, Menu, FloatLabelModule, InputTextModule, FormsModule, AccordionModule, CardModule, FloatLabel, InputNumber, ReactiveFormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  produtos: Produto[] = [];
  items: MenuItem[] | undefined;
  produtosForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required)
  });

  constructor(private produtoService: ProdutoService) { }


  ngOnInit() {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
    });
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' }
    ];
  }
  adicionarProduto() {
    if (!this.produtosForm.valid) {
      return;
    }
    const novoProduto: Produto = {
      nome: this.produtosForm.value.nome,
      preco: this.produtosForm.value.preco
    };
    this.produtosForm.reset();
    this.produtoService.postProdutos(novoProduto).subscribe({
      next: (produto) => {
        this.produtos.push(produto);
      },
      error: (error) => {
        alert('Erro ao adicionar produto: ' + error.error?.message);
      }
    });
  }
}
