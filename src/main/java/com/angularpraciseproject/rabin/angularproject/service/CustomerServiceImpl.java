package com.angularpraciseproject.rabin.angularproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularpraciseproject.rabin.angularproject.dto.CustomerVo;
import com.angularpraciseproject.rabin.angularproject.entity.CustomerEntity;
import com.angularpraciseproject.rabin.angularproject.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public CustomerVo recordingCustomerInformation(CustomerVo customerVo) {
		if(customerVo.getUsername()!=null && customerVo.getAddress()!=null && customerVo.getEducation()!=null && customerVo.getPassword()!=null) {
			CustomerEntity customerEntity=new CustomerEntity();
			BeanUtils.copyProperties(customerVo, customerEntity);
			customerRepository.save(customerEntity);
			return customerVo;
		}else {
			throw new NullPointerException("customerVo cannot be null");
		}
		
	}

	@Override
	public String authenticationCustomer(CustomerVo customerVo,String username) {
		Optional<CustomerEntity> exist = customerRepository.findByUsername(username);
		if (exist.isPresent()) {
			CustomerEntity customerEntity = exist.get();
			String password=customerVo.getPassword();
			if (customerEntity.getUsername().equals(username)) {
			if (customerEntity.getPassword().equals(password)) {
				return "correct";
			}
			}
		}
		return "not present";

	}

	@Override
	public List<CustomerVo> getAllData() {
		List<CustomerEntity>customerEntity=customerRepository.findAll();
		List<CustomerVo>customer=new ArrayList<>();//blank list
		
		for(CustomerEntity custom:customerEntity) {
			CustomerVo customerVo=new CustomerVo();//blank
			BeanUtils.copyProperties(custom, customerVo);
			customer.add(customerVo);
		}
		return customer;
	}

	@Override
	public void deleteRecord(String username) {
		
		customerRepository.deleteByUsername(username);
	}

	@Override
	public CustomerVo getCustomerInfo(Integer id) {
		Optional<CustomerEntity>exist=customerRepository.findById(id);
		if(exist.isPresent()) {
			CustomerEntity customerEntity=exist.get();
			CustomerVo customer=new CustomerVo();
			BeanUtils.copyProperties(customerEntity, customer);
			return customer;
		}else {
			return null;
		}
		
	}

}
