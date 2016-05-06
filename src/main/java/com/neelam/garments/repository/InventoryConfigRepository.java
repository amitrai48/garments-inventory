package com.neelam.garments.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.neelam.garments.model.InventoryConfig;

@Repository
public interface InventoryConfigRepository extends MongoRepository<InventoryConfig, String> {

	public InventoryConfig findByProductLike(String product);
	public InventoryConfig save(InventoryConfig inventoryConfig);
	public List<InventoryConfig> findAll();
	public void deleteByProductLike(String product);
	
}
