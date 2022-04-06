package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class FishingLesson extends Offer {

    private int lessonPrice;
    private List<String> fishingEquipment;

    public FishingLesson(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int lessonPrice, List<String> fishingEquipment) {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices );
        this.lessonPrice = lessonPrice;
        this.fishingEquipment = fishingEquipment;
    }

    public List<String> getFishingEquipment() {
        return fishingEquipment;
    }

    public int getLessonPrice() {
        return lessonPrice;
    }

    public void setLessonPrice(int lessonPrice) {
        this.lessonPrice = lessonPrice;
    }

    @Override
    public int calculatePrice() {
        return 0; //treba overrajdovati
    }
}
