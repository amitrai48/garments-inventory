package com.neelam.garments.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.neelam.garments.model.CustomerInfo;
import com.neelam.garments.repository.CustomerRepository;

@RestController
@RequestMapping("/feedback/customer")
public class CustomerInfoController {
@Autowired
private CustomerRepository customerRepository;

@RequestMapping(method=RequestMethod.GET)
public List<CustomerInfo> findA()
{
	return customerRepository.findAll();
}

@RequestMapping(method=RequestMethod.POST)
public CustomerInfo save(@Validated @RequestBody CustomerInfo customerInfo)
{
	if(customerRepository.findByEmailIdLike(customerInfo.getEmailId())==null)
	{
		return customerRepository.save(customerInfo);
	}
	return null;
}

@RequestMapping(value="{id}", method=RequestMethod.PUT)
public CustomerInfo findByEmail(@PathVariable("id") String id)
{
	return customerRepository.findByEmailIdLike(id);
}


@RequestMapping(value="{id}", method=RequestMethod.DELETE)
public void deleteByEmail(@PathVariable("id") String id)
{
	customerRepository.deleteByEmailIdLike(id);
}

}
