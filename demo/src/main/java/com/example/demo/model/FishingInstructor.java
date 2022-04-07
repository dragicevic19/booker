package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class FishingInstructor extends ServiceProvider {


    @OneToMany(mappedBy = "fishing_instructor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name="fishing_lessons")
    private List<FishingLesson> fishingLessons;

    @Column(name="biography")
    private String biography;

    public FishingInstructor(){
        this.fishingLessons = new ArrayList<FishingLesson>();
    }

    public FishingInstructor(String email, String name, String lastName, Address address, String phoneNumber, String biography) {
        super(email, name, lastName, address, phoneNumber);
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
