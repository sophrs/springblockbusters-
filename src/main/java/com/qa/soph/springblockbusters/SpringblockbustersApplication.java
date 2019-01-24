package com.qa.soph.springblockbusters;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SpringblockbustersApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringblockbustersApplication.class, args);
	}

}

