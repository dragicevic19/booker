package com.example.demo.service;

import com.example.demo.dto.FishingLessonRequest;
import com.example.demo.model.FishingLesson;

import java.util.List;

public interface FishingLessonService {
    public FishingLesson findById(Integer id);
    FishingLesson editFishingLesson(FishingLesson fishingLesson, FishingLessonRequest fishingLessonRequest);

    List<FishingLesson> findAll();

    public Integer countFishingLessonByCity(String c);

    void deleteFishingLesson(FishingLesson fishingLesson);
}
