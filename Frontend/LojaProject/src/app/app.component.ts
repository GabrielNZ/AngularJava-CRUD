import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, CommonModule, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LojaProject';

  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Produtos',
      icon: 'pi pi-box',
      routerLink: '/produtos'
    },
    {
      label: 'Pedidos',
      icon: 'pi pi-shopping-cart',
      routerLink: '/pedidos'
    }
    ]
  }
}
