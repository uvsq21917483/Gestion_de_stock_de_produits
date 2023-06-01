package Produit.repository;

import java.util.List;  

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import Produit.Model.category;
import Produit.Model.produit;

@RepositoryRestResource( path= "rest" )
public interface productRepository extends JpaRepository<produit , Long>{

	List<produit> findByNom(String nom);
	List<produit> findByNomContains(String nom);
	@Query("select p from produit p where p.nom like %?1 and p.prix > ?2")
	List<produit> findByNomPrix(@Param("nom")String asmo,@Param("prix") int si3r);
	@Query("select p from produit p where p.cat = ?1 ")
	List<produit> findByCat(category cat);
	
	    @Query("SELECT p FROM produit p WHERE p.cat.IDcat = :idCati")
	    List<produit> findCatBlID(@Param("idCati") Long idCati);
	
}


