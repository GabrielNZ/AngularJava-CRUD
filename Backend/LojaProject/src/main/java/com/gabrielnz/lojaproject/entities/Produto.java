package com.gabrielnz.lojaproject.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tb_produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;
    private Double preco;

    // Daria pra acresentar informacoes utilizando uma classe auxiliar: "ITEM_PEDIDO" acrescentando quantidade, desconto, etc.
    // Porem traria outro tipo de relacao, na qual nao foi solicitada.

    @ManyToMany(mappedBy = "produtos")
    private List<Pedido> pedidos;       // Relacao de PK composta

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
