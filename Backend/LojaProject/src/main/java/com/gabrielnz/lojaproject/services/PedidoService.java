package com.gabrielnz.lojaproject.services;
import com.gabrielnz.lojaproject.entities.Pedido;
import com.gabrielnz.lojaproject.entities.Produto;
import com.gabrielnz.lojaproject.entities.dtos.PedidoDTO;
import com.gabrielnz.lojaproject.entities.dtos.ProdutoDTO;
import com.gabrielnz.lojaproject.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido getPedidoById(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    public List<Pedido> getAllPedidos() {
        return pedidoRepository.findAll();
    }

    @Transactional
    public Pedido salvarPedido(PedidoDTO pedido) {
        if (pedido.produtos().isEmpty()) {
            throw new RuntimeException("O pedido deve conter pelo menos um produto.");
        }

        // Somando o valor total do pedido atraves de uma expressao lambda
        Double valorTotal = pedido.produtos().stream().map(ProdutoDTO::preco).reduce(0.0, Double::sum);

        // Verificando se a soma resulta em um valor maior que 1000.0.
        if (valorTotal > 1000.0) {
            throw new RuntimeException("O preço total do pedido deve ser maior que zero.");
        }

        Pedido p = new Pedido();

        p.setValorTotal(valorTotal);

        // Settando a lista de produtos do pedido, mapeando cada ProdutoDTO para um Produto e retornando uma lista para o Pedido.
        p.setProdutos(pedido.produtos().stream().map(produtoDTO -> {
            Produto produto = new Produto();
            produto.setNome(produtoDTO.nome());
            produto.setPreco(produtoDTO.preco());
            return produto;
        }).toList());

        return pedidoRepository.save(p);
    }

    @Transactional
    public Pedido atualizarPedido(Long id, PedidoDTO produto) {
        Pedido p = pedidoRepository.findById(id).orElse(null);
        if (p == null) {
            throw new RuntimeException("Pedido não encontrado com id: " + id);
        }
        Pedido pedido = new Pedido();

        // Pegando a soma do valor total do pedido atraves de uma expressao lambda
        pedido.setValorTotal(produto.produtos().stream().map(ProdutoDTO::preco).reduce(0.0, Double::sum));

        // Settando a lista de produtos do pedido, mapeando cada ProdutoDTO para um Produto e retornando uma lista para o Pedido.
        p.setProdutos(produto.produtos().stream().map(ProdutoDTO -> {
           Produto prod = new Produto();
           prod.setNome(ProdutoDTO.nome());
           prod.setPreco(ProdutoDTO.preco());
           return prod;
        }).toList());

        return pedidoRepository.save(p);
    }

    @Transactional
    public void deletarPedido(Long id) {
        if (pedidoRepository.existsById(id)) {
            pedidoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Pedido não encontrado com id: " + id);
        }
    }
}
