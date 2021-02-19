package com.brendan.main.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.Student;

@Repository
public interface StudentRepo extends CrudRepository<Student, Long>{
    // this method retrieves all the books from the database
    List<Student> findAll();
}
