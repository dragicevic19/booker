package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class FishingInstructor extends ServiceProvider {

    private List<FishingLesson> fishingLessons;
    private String biography;

    public FishingInstructor(){
        this.fishingLessons = new ArrayList<FishingLesson>();
    }

    public FishingInstructor(Integer id, String email, String name, String lastName, Address address, String phoneNumber, String biography) {
        super(id, email, name, lastName, address, phoneNumber);
        this.fishingLessons = new ArrayList<FishingLesson>();
        this.biography = biography;
    }

    public String getBiography() {
        return biography;
    }

    public List<FishingLesson> getFishingLessons() {
        return fishingLessons;
    }

    public void addLesson(FishingLesson lesson) {
        this.fishingLessons.add(lesson);
    }
}
