package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface UserService extends UserDetailsService {
    User findById(Integer id);
    List<User> findAll ();
    User save(UserRequest userRequest);
    User findByEmail(String email);
}
