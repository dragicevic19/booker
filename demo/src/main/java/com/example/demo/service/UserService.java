package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    User findById(Integer id);
    List<User> findAll ();
    User save(UserRequest userRequest);
    User findByEmail(String email);

    List<Offer> findUsersOffers(ServiceProvider s);
}
