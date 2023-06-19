package Service;

import java.util.List;

import DTA.ProduitDTO;
import Produit.Model.category;
import Produit.Model.produit;


public interface produitService  {

	ProduitDTO saveProduit (ProduitDTO p);
	ProduitDTO getProduit (Long ID);
	ProduitDTO updateProduit (ProduitDTO p);
	void deleteProduit (produit p);
	void deleteProduitById (Long ID);
	List<ProduitDTO> getAllProduit();
	produit findById(long l);
	List<produit> findAll();
	List<produit> findByNomPrix(String asmo, int si3r);
	List<produit> findByCat(category cat);
	List<produit> findByNom(String nom);
	List<produit> findByNomContains(String nom);
	public List<produit> findByIdCat(Long idCat);
	public ProduitDTO ConvertEntityToDTO(produit p);
	public  produit  ConvertDTOtoEntity(ProduitDTO p);

}
