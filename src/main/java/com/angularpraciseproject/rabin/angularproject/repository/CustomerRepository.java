package com.angularpraciseproject.rabin.angularproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angularpraciseproject.rabin.angularproject.dto.CustomerVo;
import com.angularpraciseproject.rabin.angularproject.entity.CustomerEntity;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer>{

	Optional<CustomerEntity> findByUsername(String username);

	void deleteByUsername(String username);

}
