package com.gabrielnz.lojaproject.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tb_pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "pedido_produto",                               // Nova tabela gerada na relacao ManyToMany
            joinColumns = @JoinColumn(name = "pedido_id"),         // PK da tabela Pedido
            inverseJoinColumns = @JoinColumn(name = "produto_id")  // PK da tabela Produto
    )
    private List<Produto> produtos;                                // Relacao de PK composta
}