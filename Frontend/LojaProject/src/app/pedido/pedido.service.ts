import { Injectable } from '@angular/core';
import { Pedido } from './Pedido';
import { Produto } from '../produto/Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>('http://localhost:8080/pedidos');
  }

  postPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>('http://localhost:8080/pedidos', pedido);
  }
}
