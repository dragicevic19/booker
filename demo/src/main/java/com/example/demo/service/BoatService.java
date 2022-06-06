package com.example.demo.service;

import com.example.demo.dto.BoatRequest;
import com.example.demo.dto.FishingLessonRequest;
import com.example.demo.model.Boat;
import com.example.demo.model.FishingLesson;

import java.util.List;

public interface BoatService {

    Boat findById(Integer id);

    List<Boat> findAll();

    void deleteBoat(Boat boat);

    Boat editBoat(Boat boat, BoatRequest boatRequest);
}
