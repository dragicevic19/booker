package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.Client;
import com.example.demo.model.FishingInstructor;
import com.example.demo.model.User;

import java.util.List;

public interface FishingInstructorService {
    FishingInstructor findById(Integer id);
    FishingInstructor findByEmail(String email);
    List<FishingInstructor> findAll ();
    FishingInstructor save(User user);
}
