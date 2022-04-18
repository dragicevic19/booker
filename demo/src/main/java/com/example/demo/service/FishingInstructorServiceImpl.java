package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.FishingInstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class FishingInstructorServiceImpl implements FishingInstructorService{

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private FishingInstructorRepository fishingInstructorRepository;
    @Autowired
    private RoleService roleService;

    @Override
    public FishingInstructor findById(Integer id) {
        return fishingInstructorRepository.findById(id).orElseGet(null);
    }

    @Override
    public FishingInstructor findByEmail(String email) {
        return fishingInstructorRepository.findByEmail(email);
    }

    @Override
    public List<FishingInstructor> findAll() {
        return fishingInstructorRepository.findAll();
    }

    @Override
    public FishingInstructor save(User user) {
        FishingInstructor f = new FishingInstructor(user);
        f.setRating(new Rating());
        f.setLoyaltyProgram(new LoyaltyProgram());
        f.setFishingLessons(new ArrayList<>());
        f.setBiography("");
        List<Role> roles = roleService.findByName("ROLE_INSTRUCTOR");
        f.setRoles(roles);

        return this.fishingInstructorRepository.save(f);
    }
}
