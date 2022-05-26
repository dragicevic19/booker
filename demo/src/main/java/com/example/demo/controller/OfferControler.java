package com.example.demo.controller;

import com.example.demo.model.Cottage;
import com.example.demo.service.CottageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "auth/")
public class OfferControler {

    @Autowired
    CottageService cottageService;

    @GetMapping("cottages/countByCity")
    public ResponseEntity<List<Integer>> countCottagesByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(cottageService.countCottagesByCity(c));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @GetMapping("cottages/4offers")
    public ResponseEntity<List<Cottage>> fourOffers(){
        List<Cottage> cotlist = cottageService.fourOffers();
        List<Cottage> retList = new ArrayList<>();
        for (int i =0;i<3&&i<cotlist.size();i++) {
            retList.add(cotlist.get(i));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }








}
