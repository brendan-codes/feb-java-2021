package com.brendan.main.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.brendan.main.models.User;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
