package Produit.Model;

import java.util.Date; 

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class produit {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	private String nom;
	private int prix;
	private Date dateCreation;
	
	@Override
	public String toString() {
		return "produit [	 nom=" + nom + ", prix=" + prix + ", dateCreation=" + dateCreation + "] \n";
	}
	public produit(String nom, int prix, Date dateCreation) {
		this.nom = nom;
		this.prix = prix;
		this.dateCreation = dateCreation;
	}
	
	@ManyToOne
	private category cat ;

	
}