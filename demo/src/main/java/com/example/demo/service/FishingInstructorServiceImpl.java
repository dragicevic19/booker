package com.example.demo.service;

import com.example.demo.dto.LessonRequest;
import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.FishingInstructorRepository;
import com.example.demo.repository.FishingLessonRepository;
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
    private FishingLessonRepository fishingLessonRepository;
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

    @Override
    public FishingLesson addLesson(LessonRequest lessonRequest, FishingInstructor fI) {
        FishingLesson fishingLesson = new FishingLesson();
        fishingLesson.setName(lessonRequest.getName());
        Address a = new Address();
        a.setStreet(lessonRequest.getAddress());
        a.setCountry(lessonRequest.getCountry());
        a.setCity(lessonRequest.getCity());
        fishingLesson.setAddress(a);
        fishingLesson.setLessonPrice(lessonRequest.getPrice());
        fishingLesson.setCapacity(lessonRequest.getMaxNumAttendants());
        fishingLesson.setDeleted(false);
        fishingLesson.setDescription(lessonRequest.getDescription());
        fishingLesson.setCancellationFee(lessonRequest.getFee());
        fishingLesson.setRating(new Rating());
        fishingLesson.setRegulations(lessonRequest.getRules());
        fishingLesson.setPeriodsOfOccupancy(new ArrayList<Period>());
        fishingLesson.setDiscounts(new ArrayList<>());
        fishingLesson.setImages(lessonRequest.getImages());
        fishingLesson.setReservations(new ArrayList<>());

        fI.getOffers().add(fishingLesson);

        return this.fishingLessonRepository.save(fishingLesson);
    }
}
