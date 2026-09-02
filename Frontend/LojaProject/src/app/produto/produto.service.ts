import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produtos');
  }

  postProdutos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produtos', produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/produtos/${id}`);
  }
}
