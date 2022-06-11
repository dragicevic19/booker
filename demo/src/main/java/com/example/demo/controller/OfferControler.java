package com.example.demo.controller;

import com.example.demo.model.Cottage;
import com.example.demo.model.FishingLesson;
import com.example.demo.service.BoatService;
import com.example.demo.service.CottageService;
import com.example.demo.service.FishingLessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/")
public class OfferControler {

    @Autowired
    CottageService cottageService;

    @Autowired
    FishingLessonService fishingLessonService;

    @Autowired
    BoatService boatService;


   // @PreAuthorize("hasRole('COTTAGE_OWNER')")   // da li za ovu funkciju treba autorizacija i autentifikacija jer ce je koristiti i neulogovani verovatno?
    @GetMapping("cottage/{cottageId}")
    public ResponseEntity<Cottage> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(cottage, HttpStatus.OK);
    }

    @GetMapping("lesson/{lessonId}")
    public ResponseEntity<FishingLesson> loadLesson(@PathVariable Integer lessonId) {

        FishingLesson fishingLesson = fishingLessonService.findById(lessonId);
        if (fishingLesson == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(fishingLesson, HttpStatus.OK);
    }



}
