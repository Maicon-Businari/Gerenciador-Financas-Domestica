package com.maicon.gerenciador_de_financas_pessoais.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maicon.gerenciador_de_financas_pessoais.model.Pessoa;
import com.maicon.gerenciador_de_financas_pessoais.model.Transacao;
import com.maicon.gerenciador_de_financas_pessoais.repository.RepositorioTransacao;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Service: Informa para o spring que essa classe é uma service 
 * 
 * Classes services ficam responsavel por lidar com as regras de negócios
 */
@Service
public class ServicosTransacoes {

    // Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    ServicosPessoa servicosPessoa;

    // Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    RepositorioTransacao repositorioTransacao;

    // Responsavel por receber uma trasação do controler e cadastar no repositório
    public Transacao cadastrarTransacao(Transacao transacao) {

        Pessoa pessoaEncontrada = servicosPessoa.buscarPessoa(transacao.getPessoa().getNome());

        /*---------------- IMPORTANTE FUNCIONALIDADE SOLICIDATA ----------------
        * Solicitação: "Caso o usuário informe um menor de idade (menor de 18), apenas despesas deverão ser aceitas."
        * 
        * if() -> Fica responsavel por autorizar uma transação da pessoa com base nos critérios acima
        * 
        */
        if (pessoaEncontrada.getIdade() >= 18 || pessoaEncontrada.getIdade() < 18 && !transacao.isReceita()) {
            transacao.setPessoa(pessoaEncontrada);
            return repositorioTransacao.save(transacao);

        }
        return null;
    }

    //Solicita ao repositório a lista de transações e encaminha para o controlador
    public List<Transacao> listarTransacoes() {
        return repositorioTransacao.findAll();
    }

}
