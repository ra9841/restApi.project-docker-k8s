package com.angularpraciseproject.rabin.angularproject.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angularpraciseproject.rabin.angularproject.dto.CustomerVo;
import com.angularpraciseproject.rabin.angularproject.service.CustomerService;






@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/register")
	public CustomerVo savingInforamtionOfCustomer(@RequestBody CustomerVo customerVo) {
		CustomerVo customer=customerService.recordingCustomerInformation(customerVo);
		return customer;
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<?> authentication(@RequestBody CustomerVo customerVo) {
//		String username=customerVo.getUsername();
//		String msg=customerService.authenticationCustomer(customerVo,username);
//		 Map<String, Object> response = new HashMap<>();
//		    if (msg.equals("correct")) {
//		        response.put("status", "success"); 
//		    } else {
//		        response.put("status", "error");  
//		    }
//		    return ResponseEntity.ok(response);
//		
//	}
	
	@PostMapping("/login")
	public  String authentication(@RequestBody CustomerVo customerVo) {
		String username=customerVo.getUsername();
		String msg=customerService.authenticationCustomer(customerVo,username);
		// Map<String, Object> response = new HashMap<>();
		    if (msg.equals("correct")) {
		       // response.put("status", "success"); 
		        return "success";
		    } else {
		       // response.put("status", "error"); 
		    	return "unsuccess";
		    }
		    
	}
	
	@GetMapping("/show")
	public List<CustomerVo> findAllRecord() {
		List<CustomerVo>customerVo=customerService.getAllData();
		return customerVo;
	}
	
	@DeleteMapping("/delete/{username}")
	public void deleteCustomer(@PathVariable String username) {
		customerService.deleteRecord(username);
	}
	
	@GetMapping("/update/{id}")
		public CustomerVo updateRecord(@PathVariable Integer id) {
		CustomerVo customer=customerService.getCustomerInfo(id);
		return customer;
			
		}
	@PutMapping("/save")
	public CustomerVo updateInforamtionOfCustomer(@RequestBody CustomerVo customerVo) {
		CustomerVo customer=customerService.recordingCustomerInformation(customerVo);
		return customer;
	}
	

}
