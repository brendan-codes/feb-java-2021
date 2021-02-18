package com.brendan.main.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brendan.main.models.Book;
import com.brendan.main.services.BookService;

@RestController
public class BooksApi {
    private final BookService bookService;
    public BooksApi(BookService bookService){
        this.bookService = bookService;
    }
    
    @RequestMapping("/api/test")
    public String test() {
    	return "This is the web server speaking";
    }
    
    @RequestMapping("/api/books")
    public List<Book> showAll() {
    	return bookService.allBooks();
    }
    
    @RequestMapping(value="/api/books", method=RequestMethod.POST)
    public Book create(@RequestParam(value="title") String title, 
    				   @RequestParam(value="description") String desc, 
    				   @RequestParam(value="language") String lang, 
    				   @RequestParam(value="pages") Integer numOfPages) {
    	Book book = new Book(title, desc, lang, numOfPages);
    	return bookService.createBook(book);
    }
   
    
    
    // other methods removed for brevity
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.PUT)
    public String update(@PathVariable("id") Long id, 
    					 @RequestParam(value="title") String title, 
    					 @RequestParam(value="description") String desc, 
    					 @RequestParam(value="language") String lang, 
    					 @RequestParam(value="pages") Integer numOfPages) {
//        Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
        return "";
    }
    
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
//        bookService.deleteBook(id);
    	return "";
    }
}
