package com.gabrielnz.lojaproject.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tb_pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Double valorTotal;

    // Daria pra acresentar informacoes utilizando uma classe auxiliar: "ITEM_PEDIDO" acrescentando QUANTIDADE, DESCONTO, etc.
    // Porem traria outro tipo de relacao, na qual nao foi solicitada uma de 1*N.

    @ManyToMany
    @JoinTable(
            name = "pedido_produto",                               // Nova tabela gerada na relacao ManyToMany
            joinColumns = @JoinColumn(name = "pedido_id"),         // PK da tabela Pedido
            inverseJoinColumns = @JoinColumn(name = "produto_id")  // PK da tabela Produto
    )
    private List<Produto> produtos;                                // Relacao de PK composta

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}