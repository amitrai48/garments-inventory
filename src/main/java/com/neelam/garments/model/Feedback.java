package com.neelam.garments.model;

import java.util.Arrays;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

import com.neelam.garments.repository.InventoryConfigRepository;

@Document(collection="feedback")
public class Feedback{

	@Id
	private String id;
	
	@NotBlank
	private String emailId;
	
	@NotBlank
	private String Product;
	
	@NotBlank
	private InventoryConfigRepository requirements[];

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public InventoryConfigRepository[] getRequirements() {
		return requirements;
	}

	public void setRequirements(InventoryConfigRepository[] requirements) {
		this.requirements = requirements;
	}


	@Override
	public String toString() {
		return "Feedback [id=" + id + ", emailId=" + emailId + ", Product=" + Product + ", requirements="
				+ Arrays.toString(requirements) + "]";
	}

	public String getProduct() {
		return Product;
	}

	public void setProduct(String product) {
		Product = product;
	}

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
