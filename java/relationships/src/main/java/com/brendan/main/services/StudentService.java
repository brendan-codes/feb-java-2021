package com.brendan.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brendan.main.models.Student;
import com.brendan.main.repos.StudentRepo;

@Service
public class StudentService {
	
    // adding the student repository as a dependency
	@Autowired
    private StudentRepo studentRepository;
    
    // returns all the students
    public List<Student> allStudents() {
        return studentRepository.findAll();
    }
    
    // creates a student
    public Student createStudent(Student b) {
        return studentRepository.save(b);
    }
    
    // save a student
    public Student updateStudent(Student b) {
        return studentRepository.save(b);
    }
    
    // retrieves a student
    public Student findStudent(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(optionalStudent.isPresent()) {
            return optionalStudent.get();
        } else {
            return null;
        }
    }
}
