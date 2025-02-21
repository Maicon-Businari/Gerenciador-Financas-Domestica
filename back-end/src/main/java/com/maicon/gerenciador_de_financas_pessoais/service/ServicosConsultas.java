package com.maicon.gerenciador_de_financas_pessoais.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maicon.gerenciador_de_financas_pessoais.model.AprensentacaoFinancas;
import com.maicon.gerenciador_de_financas_pessoais.model.Pessoa;
import com.maicon.gerenciador_de_financas_pessoais.model.Transacao;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Service: Informa para o spring que essa classe é uma service 
 * 
 * Classes services ficam responsavel por lidar com as regras de negócios
 */
@Service
public class ServicosConsultas {

    // Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    ServicosPessoa servicosPessoa;

    /*---------------- IMPORTANTE FUNCIONALIDADE SOLICIDATA ----------------
       * Solicitações:
       * 1- "Deverá listar todas as pessoas cadastradas, exibindo o total de receitas, despesas e o saldo (receita – despesa) de cada uma."
       * 2- "Ao final da listagem anterior, deverá exibir o total geral de todas as pessoas incluindo o total de receitas, total de despesas e o saldo líquido."
       * 
       * Funcionalidade responsavel por analizar todas as transações, realizar calculos necessarios e devolver ao pessoa(usuario).
       */
    public List<AprensentacaoFinancas> cacularValores() {

        List<Pessoa> listaPessoas = servicosPessoa.listarPessoas();
        List<AprensentacaoFinancas> listaFinancas = new ArrayList<AprensentacaoFinancas>();

        BigDecimal receitasTotais = BigDecimal.ZERO;
        BigDecimal despesasTotais = BigDecimal.ZERO;
        int id =0;

        for (Pessoa pessoa : listaPessoas) {

            BigDecimal receitasIndividuais = BigDecimal.ZERO;
            BigDecimal despesasIndividuais = BigDecimal.ZERO;
            BigDecimal saldoIndiviual = BigDecimal.ZERO;

            for (Transacao transacao : pessoa.getTransacoes()) {
                if (transacao.isReceita()) {
                    receitasIndividuais = receitasIndividuais.add(transacao.getValor());
                    receitasTotais = receitasTotais.add(transacao.getValor());
                } else {
                    despesasIndividuais = despesasIndividuais.add(transacao.getValor());
                    despesasTotais = despesasTotais.add(transacao.getValor());
                }
            }
            id= id+1;
            saldoIndiviual = receitasIndividuais.subtract(despesasIndividuais);
            listaFinancas.add(new AprensentacaoFinancas(id, pessoa.getNome(), receitasIndividuais, despesasIndividuais,
                    saldoIndiviual));
        }
        id = id+1;
        listaFinancas.add(new AprensentacaoFinancas(id,"Total", receitasTotais, despesasTotais,
                receitasTotais.subtract(despesasTotais)));
        return listaFinancas;
    }

}
