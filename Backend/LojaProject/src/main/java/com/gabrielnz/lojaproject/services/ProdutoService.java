package com.gabrielnz.lojaproject.services;

import com.gabrielnz.lojaproject.entities.Produto;
import com.gabrielnz.lojaproject.entities.dtos.ProdutoDTO;
import com.gabrielnz.lojaproject.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto getProdutoById(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    @Transactional
    public Produto salvarProduto(ProdutoDTO produto) {
        Produto p = new Produto();
        List<Produto> produtos = produtoRepository.findAll();

        // Transformo a lista de produtos em um array e verifico se o tamanho é maior que 5
        if (produtos.toArray().length > 5) {
            throw new RuntimeException("Não é possível adicionar mais produtos. Limite de 5 produtos atingido.");
        }

        p.setNome(produto.nome());
        p.setPreco(produto.preco());
        return produtoRepository.save(p);
    }

    @Transactional
    public Produto atualizarProduto(Long id, ProdutoDTO produto) {
        Produto p = produtoRepository.findById(id).orElse(null);
        if (p != null) {
            p.setNome(produto.nome());
            p.setPreco(produto.preco());
            return produtoRepository.save(p);
        }
        return null;
    }

    @Transactional
    public void deletarProduto(Long id) {
        if (produtoRepository.existsById(id)) {
            produtoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Produto não encontrado com id: " + id);
        }
    }
}
