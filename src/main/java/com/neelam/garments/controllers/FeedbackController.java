package com.neelam.garments.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.neelam.garments.model.Feedback;
import com.neelam.garments.repository.FeedbackRepository;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	FeedbackRepository feedbackRepository;
//	
//	@RequestMapping(method=RequestMethod.GET)
//	public List<Feedback> findA()
//	{
//		return feedbackRepository.findAll();
//	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Feedback save(@Validated @RequestBody Feedback feedback)
	{
		System.out.println(feedback.toString());
		return feedbackRepository.save(feedback);
	}
	
	@RequestMapping(value="{id}",method=RequestMethod.DELETE)
	public void deleteByEmailid(@PathVariable("id") String id)
	{
		feedbackRepository.deleteByEmailIdLike(id);
	}
	
//	@RequestMapping(value="{id}",method=RequestMethod.DELETE)
//	public void deleteByProduct(@PathVariable("id") String id)
//	{
//		feedbackRepository.deleteByProductLike(id);
//	}
	
//	@RequestMapping(value="/{id}", method=RequestMethod.GET)
//	public List<Feedback> findByEmailId(@PathVariable("id") String id)
//	{
//		return feedbackRepository.findByEmailIdLike(id);
//	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public List<Feedback> findByProduct(@PathVariable("id") String id)
	{
		return feedbackRepository.findByProductLike(id);
	}
}
