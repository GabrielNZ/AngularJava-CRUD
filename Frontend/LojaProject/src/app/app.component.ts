import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
