package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(path="/submit", method=RequestMethod.POST)
	public String submitResult(@RequestParam String username,
							   @RequestParam String email, 
							   HttpSession sesh) {
//		System.out.println(username.toString());
//		System.out.println(email.toString());
		
		sesh.setAttribute("username", username);
		sesh.setAttribute("email", email);
		return "redirect:/results";
	}
	
	@RequestMapping("/results")
	public String results(HttpSession sesh, Model model) {
		String username = (String) sesh.getAttribute("username");
		String email = (String) sesh.getAttribute("email");
//		System.out.println("We are in /results");
//		System.out.println(username.concat(email).toString());
		model.addAttribute("username", username);
		model.addAttribute("email", email);
		return "results.jsp";
	}
	
	@RequestMapping("/index/{id}/{otherId}")
	public String showID(@PathVariable String id, @PathVariable String otherId) {
		System.out.println(id);
		return "redirect:/";
	}
	
}
