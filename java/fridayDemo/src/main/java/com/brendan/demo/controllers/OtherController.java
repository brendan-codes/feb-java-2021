package com.brendan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OtherController {

	@RequestMapping("/unique")
	public String whatever() {
		return "Hello world!";
	}
	
	@RequestMapping("/admin")
	public String whathaveyou() {
		return "Hello world!";
	}
}
