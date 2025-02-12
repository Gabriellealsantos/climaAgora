package com.DevWeb.ClimaAgora;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(info = @Info(title = "Clima API", version = "1", description = "Desenvolvida para um projeto de portifolio"))
@SpringBootApplication
public class ClimaAgoraApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClimaAgoraApplication.class, args);
	}

}
