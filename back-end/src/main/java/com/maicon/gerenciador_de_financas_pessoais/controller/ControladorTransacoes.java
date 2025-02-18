package com.maicon.gerenciador_de_financas_pessoais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maicon.gerenciador_de_financas_pessoais.model.Transacao;
import com.maicon.gerenciador_de_financas_pessoais.service.ServicosTransacoes;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @RestController: Informa para o spring que essa classe será responsavel por receber as requisições e encaminhar para o serviço correspondente.
 * @RequestMapping: Informa de qual rota ele deve receber as requisições.
 * 
 */
@RestController
@RequestMapping("transacao/")
public class ControladorTransacoes {

    //Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    ServicosTransacoes servicosTransacoes;

    //Rota para cadastrar transações.
    @PostMapping("cadastrar")
    public Transacao cadastrarPessoa(@RequestBody Transacao transacao) {
        return servicosTransacoes.cadastrarTransacao(transacao);
    }

    //Rota para listar transações.
    @GetMapping("listar")
    public List<Transacao> listarPessoa() {
        return servicosTransacoes.listarTransacoes();
    }
}
