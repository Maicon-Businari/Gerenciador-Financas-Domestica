package com.maicon.gerenciador_de_financas_pessoais.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maicon.gerenciador_de_financas_pessoais.model.Pessoa;
import com.maicon.gerenciador_de_financas_pessoais.repository.RepositorioPessoa;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Service: Informa para o spring que essa classe é uma service 
 * 
 * Classes services ficam responsavel por lidar com as regras de negócios
 */
@Service
public class ServicosPessoa {

    @Autowired
    RepositorioPessoa repositorioPessoa;

    //Recebe uma Pessoa como parametro do controlador e repassa para o repositório salvar
    public Pessoa cadastrarPessoa(Pessoa pessoa) {
        return repositorioPessoa.save(pessoa);
    }

    //Solicita ao repositório a lista de pessoas e encaminha para o controlador
    public List<Pessoa> listarPessoas() {
        return repositorioPessoa.findAll();
    }

    //Recebe um nome do controlador e repassa para o repositorio buscar uma pessoa por ele
    public Pessoa buscarPessoa(String nome) {
        return repositorioPessoa.findByNome(nome);
    }

    //Recebe um nome do controlador e repassa para o repositorio para que seja feita a exclusão
    public String deletarPessoa(String nome) {
        Pessoa pessoaEncontrada = repositorioPessoa.findByNome(nome);

        if (pessoaEncontrada != null) {
            repositorioPessoa.delete(pessoaEncontrada);
            return "Pessoa excluida";
        }

        return "Pessoa não encontrada";

    }

}
