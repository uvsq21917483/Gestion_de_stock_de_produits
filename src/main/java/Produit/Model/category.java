package Produit.Model;

import java.util.List;  

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Builder
public class category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long IDcat;
	private String nomCat;
	private String descripCat;

	
	@OneToMany(mappedBy="cat")
	@JsonIgnore
	List<produit> products;

	public category(String nomCat, String descripCat) {
		super();
		this.nomCat = nomCat;
		this.descripCat = descripCat;
	}
	
}
