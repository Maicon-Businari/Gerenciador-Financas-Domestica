package com.maicon.gerenciador_de_financas_pessoais.model;

import java.math.BigDecimal;

//Classe utiliza apenas para gerar um objeto que o spring possa serializar.
public record AprensentacaoFinancas(String nome, BigDecimal receita, BigDecimal despesa, BigDecimal saldo) {
}
