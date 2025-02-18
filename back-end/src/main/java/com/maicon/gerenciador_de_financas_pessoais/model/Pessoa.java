package com.maicon.gerenciador_de_financas_pessoais.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Getter: Utilizado para reduzir codigo boilerplate -> Getters.
 * @Setter: Utilizado para reduzir codigo boilerplate -> Setters.
 * @Entity: Informa para o spring que essa classe será uma entidade no banco de dados.
 * 
 */
@Getter
@Setter
@Entity
public class Pessoa {

    @Id // Informa que essa vai ser a primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // A primary key vai ser autoincrementada.
    private int id;
    private String nome;
    private int idade;

    /*---------------- IMPORTANTE FUNCIONALIDADE SOLICIDATA ----------------
     * Solicitação: "Em casos que se delete uma pessoa, todas a transações dessa pessoa deverão ser apagadas."
     * 
     * CascadeType.ALL -> Caso seja deleta uma pessoa todas as suas transações serão deletadas juntas
     * 
    */    
    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL)
    @JsonManagedReference // Para evitar loopins quando ocorrer a serialização
    private List<Transacao> transacoes;

}
