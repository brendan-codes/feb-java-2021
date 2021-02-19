package com.brendan.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brendan.main.models.School;
import com.brendan.main.repos.SchoolRepo;

@Service
public class SchoolService {
	
    // adding the school repository as a dependency
	@Autowired
    private SchoolRepo schoolRepository;
    
    // returns all the schools
    public List<School> allSchools() {
        return schoolRepository.findAll();
    }
    
    // creates a school
    public School createSchool(School b) {
        return schoolRepository.save(b);
    }
    
    // save a school
    public School updateSchool(School b) {
        return schoolRepository.save(b);
    }
    
    // retrieves a school
    public School findSchool(Long id) {
        Optional<School> optionalSchool = schoolRepository.findById(id);
        if(optionalSchool.isPresent()) {
            return optionalSchool.get();
        } else {
            return null;
        }
    }
}
