package DTA;

import java.util.Date;

import Produit.Model.category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ProduitDTO {

	private long Id;
	private String nom;
	private int prix;
	private Date dateCreation;
	private category cat ;
	private String nomCat;
	private String descripCat;
}
