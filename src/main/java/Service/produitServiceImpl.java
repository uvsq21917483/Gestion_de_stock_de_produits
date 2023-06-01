package Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DTA.ProduitDTO;
import Produit.Model.category;
import Produit.Model.produit;
import Produit.repository.productRepository;

@Service
public class produitServiceImpl implements produitService{
	
	@Autowired
	productRepository ProductRepository;
	
	@Autowired
	ModelMapper mm;
	
	@Override
	public ProduitDTO saveProduit(ProduitDTO p) {
		
		return ConvertEntityToDTO( ProductRepository.save(ConvertDTOtoEntity(p)));
	}

	@Override
	public ProduitDTO updateProduit(ProduitDTO p) {
		return ConvertEntityToDTO(ProductRepository.save(ConvertDTOtoEntity(p)));

	}

	@Override
	public void deleteProduit(produit p) {
		
		ProductRepository.delete(p);
		
	}

	@Override
	public void deleteProduitById(Long ID) {
		
		ProductRepository.deleteById(ID);		
	}

	@Override
	public ProduitDTO getProduit(Long ID) {
		return ConvertEntityToDTO(ProductRepository.findById(ID).get());
	}

	@Override
	public List<ProduitDTO> getAllProduit() {
		
		return ProductRepository.findAll().stream()
		 .map(this::ConvertEntityToDTO).collect(Collectors.toList());
	}

	@Override
	public produit findById(long l) {
		return ProductRepository.findById(l).get();
	}

	@Override
	public List<produit> findAll() {
		return ProductRepository.findAll();
	}
	
	public List<produit> findByNomPrix(String asmo,int si3r){
		return ProductRepository.findByNomPrix(asmo,si3r);
	}
	public List<produit> findByCat(category cat){
		return ProductRepository.findByCat(cat);
	}
	
	
	@Override
	public List<produit> findByNom(String nom) {
		return ProductRepository.findByNom(nom);
	}

	@Override
	public List<produit> findByNomContains(String nom) {
		return ProductRepository.findByNomContains(nom);
	}
	
	@Override
	public List<produit> findByIdCat(Long idCat){
		return ProductRepository.findCatBlID(idCat);
	}

	@Override
	public ProduitDTO ConvertEntityToDTO(produit p) {
		mm.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		ProduitDTO pd=mm.map(p, ProduitDTO.class);
		return pd;
		
	}

	@Override
	public produit ConvertDTOtoEntity(ProduitDTO pd) {
		//mm.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		produit p =mm.map(pd, produit.class);
		return p;
	}	

	
}
