package com.maicon.gerenciador_de_financas_pessoais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maicon.gerenciador_de_financas_pessoais.model.AprensentacaoFinancas;
import com.maicon.gerenciador_de_financas_pessoais.service.ServicosConsultas;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @RestController: Informa para o spring que essa classe será responsavel por receber as requisições e encaminhar para o serviço correspondente.
 * @RequestMapping: Informa de qual rota ele deve receber as requisições.
 * 
 */
@RestController
@RequestMapping("consulta/")
public class ControladorConsultas {

    //Informa para o spring que essa classe precisa ser injetada.
    @Autowired
    ServicosConsultas servicosConsultas;

    //Rota para solicar calculos das finanças domésticas.
    @GetMapping("calculargastos")
    public List<AprensentacaoFinancas> calcularGastos() {

        return servicosConsultas.cacularValores();
    }

}
