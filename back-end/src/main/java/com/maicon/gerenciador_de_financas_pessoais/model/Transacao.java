package com.maicon.gerenciador_de_financas_pessoais.model;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
public class Transacao {
    
    @Id //Informa que essa vai ser a primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // A primary key vai ser autoincrementada.
    private int id;
    private String descricao;
    private BigDecimal valor;
    private boolean receita;

    @JsonBackReference //Para evitar loopins quando ocorrer a serialização
    @ManyToOne //Informar ao spring que essa classe tem realacionamento com outra
    private Pessoa pessoa;

    @JsonProperty("nome") //Método a parte para exibir o nome do responsavel pela transação
    public String getNomePessoa(){
        return this.pessoa.getNome();
    }
}
