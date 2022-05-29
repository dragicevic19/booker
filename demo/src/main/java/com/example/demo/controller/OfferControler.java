package com.example.demo.controller;

import com.example.demo.model.Cottage;
import com.example.demo.model.Offer;
import com.example.demo.service.CottageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/")
public class OfferControler {

    @Autowired
    CottageService cottageService;


    @GetMapping("cottage/{cottageId}")
    @PreAuthorize("hasRole('COTTAGE_OWNER')")   // da li za ovu funkciju treba autorizacija i autentifikacija jer ce je koristiti i neulogovani verovatno?
    public ResponseEntity<Cottage> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(cottage, HttpStatus.OK);
    }



}
