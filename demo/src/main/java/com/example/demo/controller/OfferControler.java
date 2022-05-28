package com.example.demo.controller;

import com.example.demo.model.Cottage;
import com.example.demo.model.Offer;
import com.example.demo.service.CottageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "auth/")    // promeniti u api kasnije
public class OfferControler {

    @Autowired
    CottageService cottageService;

    @GetMapping("cottages/countByCity") // ova funkcija treba biti u nekom drugom kontroleru koji nece imati autentifikaciju i autorizaciju
    public ResponseEntity<List<Integer>> countCottagesByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(cottageService.countCottagesByCity(c));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }


    @GetMapping("cottage/{cottageId}")
//    @PreAuthorize("hasRole('COTTAGE_OWNER')")
    public ResponseEntity<Cottage> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(cottage, HttpStatus.OK);
    }

    @GetMapping("cottages/4offers")
    public ResponseEntity<List<Cottage>> fourOffers(){
        List<Cottage> cotlist = cottageService.fourOffers();
        List<Cottage> retList = new ArrayList<>();
        for (int i =0; i<4 && i<cotlist.size(); i++) {
            retList.add(cotlist.get(i));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

}
