package com.maicon.gerenciador_de_financas_pessoais.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maicon.gerenciador_de_financas_pessoais.model.Pessoa;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Repository: Informa para o spring que essa classe que lida com o banco de dados
 * 
 * Classe extende da biblioteca do JPA para poder ficar responsavel pelo banco de dados
 */
@Repository
public interface RepositorioPessoa extends JpaRepository<Pessoa, Integer>{
    
    //Criado um mecanismo de busca persolanizado ( Além dos disponiveis pelo JPA )
    Pessoa findByNome(String nome);
}
