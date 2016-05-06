package com.neelam.garments.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.neelam.garments.model.CustomerInfo;


@Repository
public interface CustomerRepository extends MongoRepository<CustomerInfo, String>{

	public List<CustomerInfo> findAll();
	public CustomerInfo findOne(String id);
	public CustomerInfo save(CustomerInfo todo);
	public void deleteByEmailIdLike(String emailId);
	public CustomerInfo findByEmailIdLike(String emailId);
	public CustomerInfo findByContactNumber(String num);
	

}
