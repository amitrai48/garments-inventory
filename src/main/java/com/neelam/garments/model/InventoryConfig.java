package com.neelam.garments.model;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="inventoryConfig")
public class InventoryConfig {
	
	@Id
	private String id;
	
	@NotBlank
	@Indexed(unique=true)
	private String product;
	
	private Object size[];
	
	private Object model[];
	
	private Object color[];
	

	public Object[] getColor() {
		return color;
	}

	public void setColor(Object[] color) {
		this.color = color;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Object getSize() {
		return size;
	}

	public void setSize(Object[] size) {
		this.size =  size;
	}

	public Object[] getModel() {
		return model;
	}

	public void setModel(Object[] model) {
		this.model = model;
	}


	
	
	

}
