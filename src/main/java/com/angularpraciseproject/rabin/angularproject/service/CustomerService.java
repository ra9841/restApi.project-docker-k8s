package com.angularpraciseproject.rabin.angularproject.service;

import java.util.List;

import com.angularpraciseproject.rabin.angularproject.dto.CustomerVo;

public interface CustomerService {

	CustomerVo recordingCustomerInformation(CustomerVo customerVo);

	String authenticationCustomer(CustomerVo customerVo,String username);

	List<CustomerVo> getAllData();

	void deleteRecord(String username);

	CustomerVo getCustomerInfo(Integer id);

}
