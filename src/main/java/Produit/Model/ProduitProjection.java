package Produit.Model;

import java.util.Date;

import org.springframework.data.rest.core.config.Projection;

@Projection(name="Asmo" , types= {produit.class})
public interface ProduitProjection {
	public long getId();
	public String getnom();
	public int getPrix();
	public Date getdateCreation();
}
