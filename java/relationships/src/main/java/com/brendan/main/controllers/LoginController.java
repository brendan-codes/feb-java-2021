package com.brendan.main.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.brendan.main.models.User;
import com.brendan.main.services.UserService;

@Controller
public class LoginController {
	@Autowired
    private UserService userService;

    
    @RequestMapping("/registration")
    public String registerForm(@ModelAttribute("user") User user) {
        return "registrationPage.jsp";
    }
    @RequestMapping("/login")
    public String login() {
        return "loginPage.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
//        userValidator.validate(user, result);
        if(result.hasErrors()) {
            return "registrationPage.jsp";
        }
        User u = userService.registerUser(user);
        session.setAttribute("userId", u.getId());
        return "redirect:/";
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(
								@RequestParam("email") String email, 
								@RequestParam("password") String password, 
								Model model, HttpSession session, 
								RedirectAttributes flash
    						) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	if(userService.authenticateUser(email, password)) {
    		User thisUser = userService.findByEmail(email);
    		session.setAttribute("userId", thisUser.getId());
    		return "redirect:/";
    	}
    	flash.addFlashAttribute("error", "failed to login");
    	return "redirect:/login";
    }
    

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        // redirect to login page
    	session.invalidate();
    	
    	return "redirect:/";
    }
}
