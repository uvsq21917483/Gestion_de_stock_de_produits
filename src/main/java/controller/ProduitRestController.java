package controller;

import java.util.List;   

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import DTA.ProduitDTO;
import Produit.Model.produit;
import Service.produitService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRestController {
	
	@Autowired
	produitService ps;
	
	@RequestMapping(method=RequestMethod.GET)
	List<ProduitDTO> getAllProduit(){
		return ps.getAllProduit();
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ProduitDTO gpbi(@PathVariable("id") Long id) {
		return ps.getProduit(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ProduitDTO createProduit(@RequestBody ProduitDTO p){
		return ps.saveProduit(p);
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public ProduitDTO UpdateProduit(@RequestBody ProduitDTO p){
		return ps.updateProduit(p);
	}
	
	
	  @RequestMapping(value="/{Id}",method=RequestMethod.DELETE) public void
	  delete(@PathVariable("Id") Long Id) { 
		  ps.deleteProduitById(Id); 
	  }
	 
	  @RequestMapping(value="klch/{id}",method=RequestMethod.GET)
		public List<produit> findblidcat(@PathVariable("id") Long id ){
			return ps.findByIdCat(id);
		}
		
		@RequestMapping(value="PBN/{nom}",method=RequestMethod.GET)
		public List<produit> FBNP(@PathVariable("nom") String nom){
			return ps.findByNomContains(nom);
		}
		
}
