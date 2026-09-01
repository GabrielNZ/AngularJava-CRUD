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
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-produto',
  imports: [SplitterModule, DataView, ButtonModule, Tag, CommonModule, Menu, FloatLabelModule, InputTextModule, FormsModule, AccordionModule, CardModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  produtos: Produto[] = [];
  items: MenuItem[] | undefined;
  nome: string = '';
  preco: number | undefined;

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
  
  }
}
