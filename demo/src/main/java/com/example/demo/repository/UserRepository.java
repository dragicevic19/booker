package com.example.demo.repository;

import com.example.demo.model.BoatOwner;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

    @Query(value = "SELECT * FROM USERS", nativeQuery = true)
    List<User> findAllIncludingDeleted();

    @Query(value = "SELECT * FROM USERS AS u WHERE u.is_deleted = true", nativeQuery = true)
    List<User> findAllOnlyDeleted();

}
