package com.gabrielnz.lojaproject.repositories;

import com.gabrielnz.lojaproject.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
