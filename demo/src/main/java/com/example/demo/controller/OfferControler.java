package com.example.demo.controller;

import com.example.demo.dto.BoatDTO;
import com.example.demo.dto.CottageDTO;
import com.example.demo.dto.FishingLessonDTO;
import com.example.demo.dto.OfferDTO;
import com.example.demo.model.Boat;
import com.example.demo.model.Cottage;
import com.example.demo.model.FishingLesson;
import com.example.demo.model.Offer;
import com.example.demo.service.BoatService;
import com.example.demo.service.CottageService;
import com.example.demo.service.FishingLessonService;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @Autowired
    OfferService offerService;


    @GetMapping("offer/{offerId}")
    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    public ResponseEntity<OfferDTO> loadOffer(@PathVariable Integer offerId) {

        Offer offer = offerService.findById(offerId);
        if (offer == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new OfferDTO(offer), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('COTTAGE_OWNER')")   // da li za ovu funkciju treba autorizacija i autentifikacija jer ce je koristiti i neulogovani verovatno?
    @GetMapping("cottage/{cottageId}")
    public ResponseEntity<CottageDTO> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new CottageDTO(cottage), HttpStatus.OK);
    }

    @GetMapping("lesson/{lessonId}")
    public ResponseEntity<FishingLessonDTO> loadLesson(@PathVariable Integer lessonId) {

        FishingLesson fishingLesson = fishingLessonService.findById(lessonId);
        if (fishingLesson == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new FishingLessonDTO(fishingLesson), HttpStatus.OK);
    }

    @GetMapping("boat/{boatId}")
    public ResponseEntity<BoatDTO> loadBoat(@PathVariable Integer boatId) {

        Boat boat = boatService.findById(boatId);
        if (boat == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new BoatDTO(boat), HttpStatus.OK);
    }

}
