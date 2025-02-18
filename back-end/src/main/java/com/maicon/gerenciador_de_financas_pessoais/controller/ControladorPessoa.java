package com.maicon.gerenciador_de_financas_pessoais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maicon.gerenciador_de_financas_pessoais.model.Pessoa;
import com.maicon.gerenciador_de_financas_pessoais.service.ServicosPessoa;


/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @RestController: Informa para o spring que essa classe será responsavel por receber as requisições e encaminhar para o serviço correspondente.
 * @RequestMapping: Informa de qual rota ele deve receber as requisições.
 * 
 */
@RestController
@RequestMapping("pessoa/")
public class ControladorPessoa {

    //Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    ServicosPessoa servicosPessoa;

    //Rota para cadastrar pessoas.
    @PostMapping("cadastrar")
    public Pessoa cadastrarPessoa(@RequestBody Pessoa pessoa){
        return servicosPessoa.cadastrarPessoa(pessoa);
    }

    //Rota para listar pessoas.
    @GetMapping("listar")
    public List<Pessoa> listarPessoa(){
        return servicosPessoa.listarPessoas();
    }

    //Rota para buscar pessoa.
    @GetMapping("buscar/{nome}")
    public Pessoa buscarPessoa(@PathVariable("nome") String nome){
        return servicosPessoa.buscarPessoa(nome);
    }
    //Rota para deletar pessoa.
    @DeleteMapping("deletar/{nome}")
    public String deletarPessoa(@PathVariable("nome") String nome){
        return servicosPessoa.deletarPessoa(nome);
    }

}
