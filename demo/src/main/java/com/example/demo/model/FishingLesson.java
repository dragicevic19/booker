package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public abstract class FishingLesson extends Offer {


    private int lessonPrice;


    public FishingLesson(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int lessonPrice) {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices );
        this.lessonPrice = lessonPrice;
    }

    public int getLessonPrice() {
        return lessonPrice;
    }

    public void setLessonPrice(int lessonPrice) {
        this.lessonPrice = lessonPrice;
    }
}
