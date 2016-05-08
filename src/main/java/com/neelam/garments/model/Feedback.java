package com.neelam.garments.model;

import java.util.Arrays;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="feedback")
public class Feedback{

	@Id
	private String id;
	
	@NotBlank
	private String emailId;
	
	
	
	private FeedbackConfig requirements[];

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

	public FeedbackConfig[] getRequirements() {
		return requirements;
	}

	public void setRequirements(FeedbackConfig[] requirements) {
		this.requirements = requirements;
	}





	@Override
	public String toString() {
		return "Feedback [id=" + id + ", emailId=" + emailId + ", requirements=" + Arrays.toString(requirements) + "]";
	}

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
class FeedbackConfig
{
	private String product;
	
	private Object size;
	
	@Override
	public String toString() {
		return "FeedbackConfig [product=" + product + ", size=" + size + ", model=" + model + ", color=" + color + "]";
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

	public void setSize(Object size) {
		this.size = size;
	}

	public Object getModel() {
		return model;
	}

	public void setModel(Object model) {
		this.model = model;
	}

	public Object getColor() {
		return color;
	}

	public void setColor(Object color) {
		this.color = color;
	}

	private Object model;
	
	private Object color;
}
