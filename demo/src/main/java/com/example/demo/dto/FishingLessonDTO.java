package com.example.demo.dto;

import com.example.demo.model.FishingLesson;

import java.util.Set;

public class FishingLessonDTO extends OfferDTO{

    private Set<String> fishingEquipment;

    public FishingLessonDTO(FishingLesson fishingLesson) {
        super(fishingLesson);
        fishingEquipment = fishingLesson.getFishingEquipment();
    }
}
