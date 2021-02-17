package com.brendan.templating.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String main(Model model) {
		String word = "Hello! This is a string from my controller!";
		model.addAttribute("word", word);
		return "index.jsp";
	}

}
