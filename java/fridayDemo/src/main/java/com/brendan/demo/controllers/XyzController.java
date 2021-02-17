package com.brendan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class XyzController {
	
	@RequestMapping("/")
	public String helloWorld() {
		return "Hello world!";
	}

}
