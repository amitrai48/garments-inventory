package com.neelam.garments.model;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="customerInfo")
public class CustomerInfo {

	@Id
	private String id;
	
	@NotBlank
	@Indexed(unique=true)
	private String emailId;
	 
	private String name;
	
	
	private String contactNumber;

	@Override
	public String toString() {
		return "CustomerInfo [emailId=" + emailId + ", name=" + name + ", contactNumber=" + contactNumber + "]";
	}

	public CustomerInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	
	
}
