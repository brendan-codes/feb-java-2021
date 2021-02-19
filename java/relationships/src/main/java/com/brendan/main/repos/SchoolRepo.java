package com.brendan.main.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.School;

@Repository
public interface SchoolRepo extends CrudRepository<School, Long>{
    // this method retrieves all the books from the database
    List<School> findAll();
}

