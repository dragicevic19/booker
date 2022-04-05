package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class FishingInstructor extends ServiceProvider {

    private List<FishingLesson> fishingLessons;

    public FishingInstructor(){
        this.fishingLessons = new ArrayList<FishingLesson>();
    }

    public FishingInstructor(Integer id, String email, String name, String lastName, Address address, String phoneNumber,
                             LoyaltyProgram loyaltyProgram) {
        super(id, email, name, lastName, address, phoneNumber, loyaltyProgram);
        this.fishingLessons = new ArrayList<FishingLesson>();
    }

    public List<FishingLesson> getFishingLessons() {
        return fishingLessons;
    }

    public void addLesson(FishingLesson lesson) {
        this.fishingLessons.add(lesson);
    }
}
