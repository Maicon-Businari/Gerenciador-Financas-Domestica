package com.maicon.gerenciador_de_financas_pessoais.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/* Anotações utilizado para que o spring saiba que precisa gerenciar essa classe e como irá lidar com elas.
 * 
 * @Configuration: Utilizado para alterar alguma propriedade das configurações do spring
 * 
 */
@Configuration
public class Configuracao implements WebMvcConfigurer {

    //Permitindo que o spirng aceite requisções vindo da porta 3000 -> Requisições vindas do react
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  
                .allowedOrigins("http://localhost:3000")  
                .allowedMethods("GET", "POST", "PUT", "DELETE") 
                .allowedHeaders("*");  
    }

}
