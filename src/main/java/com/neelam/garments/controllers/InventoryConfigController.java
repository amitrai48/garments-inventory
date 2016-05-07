package com.neelam.garments.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.neelam.garments.model.InventoryConfig;
import com.neelam.garments.repository.InventoryConfigRepository;

@RestController
@RequestMapping("/inventory/config")
public class InventoryConfigController {
	
	@Autowired
	private InventoryConfigRepository inventoryConfigRepository;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<InventoryConfig> findA()
	{
		return inventoryConfigRepository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public InventoryConfig save(@Validated @RequestBody InventoryConfig inventoryConfig)
	{
		return inventoryConfigRepository.save(inventoryConfig);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public InventoryConfig findByProduct(@PathVariable("id") String id)
	{
		System.out.println("Called");
		return inventoryConfigRepository.findByProductLike(id);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteByProduct(@PathVariable("id") String id)
	{
		inventoryConfigRepository.deleteByProductLike(id);
	}

}
