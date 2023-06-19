package controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Produit.Model.*;
import Produit.repository.categoryRepository;
import Service.produitService;

@RestController
@RequestMapping("/api/cat")
@CrossOrigin
public class CategoryRestController {
	@Autowired
	categoryRepository cr;
	
	@Autowired
	produitService ps;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<category> getAllCat(){
		return cr.findAll();
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public category FBI(@PathVariable("id") Long id){
		return cr.findById(id).get();
	}
	
	
	@RequestMapping(method=RequestMethod.POST)
	public category createCat(@RequestBody category c){
		return cr.save(c);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id) {
		List<produit> plist=ps.findByIdCat(id);
		for(produit p : plist) p.setCat(null);	
		cr.deleteById(id);
	}
	
	
}
	