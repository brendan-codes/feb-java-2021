package com.brendan.main.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.brendan.main.models.School;
import com.brendan.main.models.Student;
import com.brendan.main.services.SchoolService;
import com.brendan.main.services.StudentService;

@Controller
public class MainController {
	
	@Autowired
	private SchoolService schoolService;
	
	@Autowired
	private StudentService studentService;

	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping("/students")
	public String showStudents(@ModelAttribute("student") Student student, Model model) {
		model.addAttribute("schools", schoolService.allSchools());
		model.addAttribute("students", studentService.allStudents());
		return "students.jsp";
	}
	
	@GetMapping("/schools")
	public String showSchools(@ModelAttribute("school") School school, Model model) {
		model.addAttribute("schools", schoolService.allSchools());
		return "schools.jsp";
	}
	
	@PostMapping("/schools")
	public String createSchool(@Valid @ModelAttribute("school") School school, BindingResult res, Model model) {
	   if (res.hasErrors()) {
		   model.addAttribute("schools", schoolService.allSchools());
           return "schools.jsp";
       } else {
    	   schoolService.createSchool(school);
    	   return "redirect:/schools";
       }
	}
	
	@PostMapping("/students")
	public String createStudent(@Valid @ModelAttribute("student") Student student, BindingResult res, Model model) {
	   if (res.hasErrors()) {
		   model.addAttribute("schools", schoolService.allSchools());
		   model.addAttribute("students", studentService.allStudents());
           return "student.jsp";
       } else {
    	   studentService.createStudent(student);
    	   return "redirect:/students";
       }
	}
	
}
//
//
//@Controller
//public class BooksController {
//	
//	@Autowired // <- auto injects a service or repo
//	private BookService bookService;
//	
//	@RequestMapping("/books/new")
//    public String newBook(@ModelAttribute("book") Book book) {
//        return "new.jsp";
//    }
//	
//	@GetMapping("/books/{id}")
//	public String getBook(@PathVariable("id") Long id, Model model) {
//		Book book = bookService.findBook(id);
//		model.addAttribute("book", book);
//		return "show.jsp";
//	}
//	
//	@GetMapping("/books/{id}/edit")
//	public String editBook(@PathVariable("id") Long id, Model model) {
//		Book book = bookService.findBook(id);
//		model.addAttribute("book", book);
//		return "edit.jsp";
//	}
//	
//	@PutMapping("/books/{id}")
//	public String updateBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//		if(result.hasErrors()) {
//			return "edit.jsp";
//		} else {
//			bookService.updateBook(book);
//			return "redirect:/books";
//		}
//	}
//	
//    @RequestMapping(value="/books", method=RequestMethod.POST)
//    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
//    	
//        if (result.hasErrors()) {
//            return "new.jsp";
//        } else {
//            bookService.createBook(book);
//            return "redirect:/books";
//        }
//        
//    }
//    
//    @RequestMapping("/books")
//    public String index(Model model) {
//        List<Book> books = bookService.allBooks();
//        model.addAttribute("books", books);
//        return "index.jsp";
//    }
//}