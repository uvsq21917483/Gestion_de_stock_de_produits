package Produit.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Produit.Model.category;


@RepositoryRestResource( path= "cat" )

public interface categoryRepository extends JpaRepository<category, Long>{

}
