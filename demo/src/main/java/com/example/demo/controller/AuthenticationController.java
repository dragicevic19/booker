package com.example.demo.controller;

import com.example.demo.dto.CottageDTO;
import com.example.demo.dto.JwtAuthenticationRequest;
import com.example.demo.dto.UserRequest;
import com.example.demo.dto.UserTokenState;
import com.example.demo.model.Boat;
import com.example.demo.model.Cottage;
import com.example.demo.model.FishingLesson;
import com.example.demo.model.User;
import com.example.demo.service.BoatService;
import com.example.demo.service.CottageService;
import com.example.demo.service.FishingLessonService;
import com.example.demo.service.UserService;
import com.example.demo.util.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {
    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    CottageService cottageService;

    @Autowired
    BoatService boatService;
    @Autowired
    FishingLessonService fishingLessonService;

    @PostMapping("/login")
    public ResponseEntity<UserTokenState> createAuthenticationToken(
            @RequestBody JwtAuthenticationRequest authenticationRequest, HttpServletResponse response) {

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(), authenticationRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = (User) authentication.getPrincipal();
            String jwt = tokenUtils.generateToken(user.getUsername());
            int expiresIn = tokenUtils.getExpiredIn();

            return ResponseEntity.ok(new UserTokenState(jwt, expiresIn, user));
        }
        catch(BadCredentialsException e){
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // Endpoint za registraciju novog korisnika
    @PostMapping("/signup")
    public ResponseEntity<User> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) {
        userRequest.setEmail(userRequest.getEmail().toLowerCase(Locale.ROOT));
        User existUser = this.userService.findByEmail(userRequest.getEmail());

        if (existUser != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
//            throw new ResourceConflictException("Email already exists");
        }

        User user = this.userService.save(userRequest);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("cottages/countByCity")
    public ResponseEntity<java.util.List<Integer>> countCottagesByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(cottageService.countCottagesByCity(c));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }


    @GetMapping("boats/countByCity")
    public ResponseEntity<java.util.List<Integer>> countBoatsByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(boatService.countBoatsByCity(c));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @GetMapping("adventures/countByCity")
    public ResponseEntity<java.util.List<Integer>> countAdventuresByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(fishingLessonService.countFishingLessonByCity(c));
        }
        return new ResponseEntity<>(retList, HttpStatus.OK);
    }


    @GetMapping("cottages/4offers")
    public ResponseEntity<List<Cottage>> fourOffers(){

        List<Cottage> cotlist = cottageService.fourOffers();


        return new ResponseEntity<>(cotlist, HttpStatus.OK);
    }

    @GetMapping("adventures/4offers")
    public ResponseEntity<List<FishingLesson>> fourOffersAdventure(){

        List<FishingLesson> fislist = fishingLessonService.fourOffers();


        return new ResponseEntity<>(fislist, HttpStatus.OK);
    }





    @GetMapping("boats/4offers")
    public ResponseEntity<List<Boat>> fourOffersBoat(){

        List<Boat> cotlist = boatService.fourOffersBoat();


        return new ResponseEntity<>(cotlist, HttpStatus.OK);
    }
    @GetMapping("fishinglessons")
    public ResponseEntity<List<FishingLesson>> getLessonOffers(@RequestParam Map<String,String> allParams){
        String start =allParams.get("startDate");
        String end = allParams.get("endDate");
        int min = Integer.parseInt(allParams.get("min"));
        int max = Integer.parseInt(allParams.get("max"));
        int guests = Integer.parseInt(allParams.get("guests"));

        List<FishingLesson> fislist ;
        fislist = fishingLessonService.findAllByCityAndDateAnd(allParams.get("city"),start,end,min,max,guests);



        return new ResponseEntity<>(fislist, HttpStatus.OK);
    }





    @GetMapping("cottages")
    public ResponseEntity<List<Cottage>> getOffers(@RequestParam Map<String,String> allParams){
        String start =allParams.get("startDate");
        String end = allParams.get("endDate");
        int min = Integer.parseInt(allParams.get("min"));
        int max = Integer.parseInt(allParams.get("max"));
        int guests = Integer.parseInt(allParams.get("guests"));
        int rooms = Integer.parseInt(allParams.get("rooms"));
        List<Cottage> cotlist ;
        cotlist = cottageService.findAllByCityAndDateAnd(allParams.get("city"),start,end,min,max,guests,rooms);



        return new ResponseEntity<>(cotlist, HttpStatus.OK);
    }

    @GetMapping("boats")
    public ResponseEntity<List<Boat>> getBoatOffers(@RequestParam Map<String,String> allParams){
        String start =allParams.get("startDate");
        String end = allParams.get("endDate");
        int min = Integer.parseInt(allParams.get("min"));
        int max = Integer.parseInt(allParams.get("max"));
        int guests = Integer.parseInt(allParams.get("guests"));
        List<Boat> boatlist ;
        boatlist = boatService.findAllByCityAndDateAnd(allParams.get("city"),start,end,min,max,guests);



        return new ResponseEntity<>(boatlist, HttpStatus.OK);
    }

    @GetMapping("cottage/{cottageId}")
    public ResponseEntity<CottageDTO> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new CottageDTO(cottage), HttpStatus.OK);
    }


    @GetMapping("fishinglesson/{fishinglessonId}")
    public ResponseEntity<FishingLesson> loadFishingLesson(@PathVariable Integer fishinglessonId) {

        FishingLesson fishinglesson = fishingLessonService.findById(fishinglessonId);
        if (fishinglesson == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(fishinglesson, HttpStatus.OK);
    }


    @GetMapping("boat/{boatId}")
    public ResponseEntity<Boat> loadBoat(@PathVariable Integer boatId) {

        Boat boat = boatService.findById(boatId);
        if (boat == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(boat, HttpStatus.OK);
    }




    @PostMapping("create-deletion-request/{userId}")
    public ResponseEntity<Boolean> createDeletionRequest(@PathVariable Integer userId, @RequestParam("request_text") String requestText) {

        User user = userService.findById(userId);
        userService.createDeletionRequest(user, requestText);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }


}
