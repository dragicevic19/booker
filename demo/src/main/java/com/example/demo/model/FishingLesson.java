package com.example.demo.model;

import org.springframework.data.repository.cdi.Eager;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;


@Entity
public class FishingLesson extends Offer {

    @Column(name = "lesson_price", unique = false, nullable = false)
    private int lessonPrice;

    @ElementCollection
    @Column(name="fishing_equipment")
    private List<String> fishingEquipment;

    public FishingLesson() {}

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
