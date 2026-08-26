package com.gabrielnz.lojaproject.services;
import com.gabrielnz.lojaproject.entities.Pedido;
import com.gabrielnz.lojaproject.entities.Produto;
import com.gabrielnz.lojaproject.entities.dtos.PedidoDTO;
import com.gabrielnz.lojaproject.entities.dtos.ProdutoDTO;
import com.gabrielnz.lojaproject.repositories.PedidoRepository;
import com.gabrielnz.lojaproject.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository pedidoRepository;
    @Autowired
    private ProdutoRepository produtoRepository;

    public Pedido getPedidoById(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    public List<Pedido> getAllPedidos() {
        return pedidoRepository.findAll();
    }

    @Transactional
    public Pedido salvarPedido(PedidoDTO pedidoDTO) {

        if (pedidoDTO.produtos().isEmpty()) {
            throw new RuntimeException("O pedido deve conter pelo menos um produto.");
        }

        // Settando a lista de produtos do pedido, mapeando cada ProdutoDTO para um Produto atraves do Id.
        List<Produto> produtos = pedidoDTO.produtos().stream().map(dto ->
                produtoRepository.findById(dto.id()).orElseThrow(() -> new RuntimeException("Produto não encontrado com id: " + dto.id())))
                .toList();

        // Somando o valor total do pedido atraves de uma expressao lambda
        double valorTotal = produtos.stream()
                .mapToDouble(Produto::getPreco)
                .sum();

        // Verificando se a soma resulta em um valor maior que 1000.0.
        if (valorTotal > 1000.0) {
            throw new RuntimeException("O preço total do pedido não pode ser maior que R$ 1.000,00.");
        }

        Pedido pedido = new Pedido();

        pedido.setValorTotal(valorTotal);
        pedido.setProdutos(produtos);

        return pedidoRepository.save(pedido);
    }

    @Transactional
    public Pedido atualizarPedido(Long id, PedidoDTO pedidoDTO) {
        Pedido pedido = pedidoRepository.findById(id).orElseThrow(() ->
                        new RuntimeException("Pedido não encontrado com id: " + id));

        // Settando a lista de produtos do pedido, mapeando cada ProdutoDTO para um Produto atraves do Id.
        List<Produto> produtos = pedidoDTO.produtos().stream().map(dto ->
                        produtoRepository.findById(dto.id()).orElseThrow(() ->
                        new RuntimeException("Produto não encontrado com id: " + dto.id())))
                .toList();
        double valorTotal = produtos.stream().mapToDouble(Produto::getPreco).sum();

        // Verificando se a soma resulta em um valor maior que 1000.0.
        if (valorTotal > 1000.0) {
            throw new RuntimeException("O preço total do pedido não pode ser maior que R$ 1.000,00.");
        }

        pedido.setValorTotal(valorTotal);
        pedido.setProdutos(produtos);

        return pedidoRepository.save(pedido);
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
