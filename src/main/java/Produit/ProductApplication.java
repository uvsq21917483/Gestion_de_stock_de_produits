package Produit;

import org.modelmapper.ModelMapper; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner; 
import org.springframework.boot.SpringApplication; 
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import Produit.Model.produit;
import Produit.Model.category;

@SpringBootApplication(scanBasePackages = {"DTA","controller","Service","Produit.model", "Produit.repository"})
public class ProductApplication implements CommandLineRunner {

	@Autowired
	public RepositoryRestConfiguration rrc ;
	
	public static void main(String[] args) {
		SpringApplication.run(ProductApplication.class, args);
	}
	
	

	@Override
	public void run(String... args) throws Exception {
		rrc.exposeIdsFor(produit.class , category.class);
	}
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

}
	