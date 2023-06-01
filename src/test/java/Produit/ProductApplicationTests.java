package Produit;

import java.util.Date;     
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import Produit.repository.categoryRepository;
import Produit.repository.productRepository;
import Produit.Model.category;
import Produit.Model.produit;

@SpringBootTest
class ProductApplicationTests {
	
	@Autowired
	private productRepository pRC;
	

	
	@Autowired
	categoryRepository cs;
	
	@Test
	void testeSaveProduct() {
		produit prod=new produit("cacao",180,new Date());
		
		  pRC.save(prod); 
		  prod=new produit("louz",400,new Date());
		  pRC.save(prod);
		  prod=new produit("ljouz",390,new Date());
		  pRC.save(prod);
		  
		  prod=new produit("l3ssila",1000,new Date()); 
		  pRC.save(prod);
		 
		
	}
	
	
	  @Test void testeFindProduct() {
			produit prod=new produit("louz",200,new Date());
			pRC.save(prod);

	  
	  produit p= pRC.findById((long) 9).get(); 
	  p.setPrix(150);
	  pRC.save(p); 
	  }
	  
	  @Test void deletebyId() { pRC.deleteById(1L);
	  
	  }
	  
	  @Test void testFindAll() { produit prod=new produit("louz",400,new Date());
	  pRC.save(prod); List<produit> pl=pRC.findAll();
	  System.out.println(pl);
	  
	  }
	  
	  
	  
	  
	  
	  @Test void testFindAllByName() { produit prod=new
	  produit("noix de cajoux",400,new Date()); produit prod1=new
	  produit("noix de coco",98,new Date()); produit prod2=new
	  produit("noixili",100,new Date());
	  
	  pRC.save(prod); pRC.save(prod1); pRC.save(prod2);
	  
	  List<produit> pl=pRC.findByNom("louz"); System.out.println(pl );
	  
	  }
	  
	  @Test void testFindAllByNameContains() { List<produit>
	  pl=pRC.findByNomContains("ouz"); System.out.println(pl );
	  
	  }
	  
	  
	  @Test void testFindAllByNamePrix() {
	  
	  produit prod=new produit("noix de cajoux",98,new Date()); produit prod1=new
	  produit("noix de cajoux",105,new Date()); pRC.save(prod);
	  pRC.save(prod1); List<produit>
	  pl=pRC.findByNomPrix("noix de cajoux",100);
	  
	  System.out.println(pl );
	  
	  }
	  
	  
	  
	  
	  
	  @Test 
	  public void testfindByCat() { 
      
		  category c= new category("lbenna","l9owa");
		  cs.save(c);
		  produit p= pRC.findById((long) 7).get();
			
			  p.setCat(c);
			  pRC.save(p); 
			  
			  p= pRC.findById((long) 8).get();
			  System.out.println(p.getNom());
				
				  p.setCat(c);
				  pRC.save(p); 
				  p= pRC.findById((long) 9).get();
					
					  p.setCat(c);
					 pRC.save(p); 
			  List<produit> pl=pRC.findByCat(c);
			  
			  System.out.println(pl);
			 
	  }


	  @Test 
	  public void testAll() { 
		  System.out.println(pRC.findAll());
	  }
	  
	  @Test
	  public void testAjoutCat() {
		  category c= new category("na3ama","CRB");
		  cs.save(c);
	  }
	  

}
