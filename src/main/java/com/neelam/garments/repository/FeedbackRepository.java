package com.neelam.garments.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.neelam.garments.model.Feedback;


@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, String> {
	
	public List<Feedback> findAll();
	
	public List<Feedback> findByEmailIdLike(String emailId);
	
	@Query("{ 'requirements': { $elemMatch: { 'product' :  ?0 } } }")
	public List<Feedback> findByProductLike(String product);
	
	public Feedback save(Feedback feedback);
	
	public void deleteByEmailIdLike(String emailId);
	
//	public void deleteByProductLike(String product);
		
}
