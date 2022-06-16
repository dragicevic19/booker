package com.example.demo.controller;
import com.example.demo.dto.OfferToList;
import com.example.demo.dto.ServiceProvidersToList;
import com.example.demo.dto.UserDataTable;
import com.example.demo.model.*;
import com.example.demo.service.BoatService;
import com.example.demo.service.CottageService;
import com.example.demo.service.FishingLessonService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/")
public class AdminController {

    @Autowired
    CottageService cottageService;

    @Autowired
    FishingLessonService fishingLessonService;

    @Autowired
    BoatService boatService;

    @Autowired
    UserService userService;

    @GetMapping("/cottages")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<OfferToList>> loadAllCottages() {
        List<OfferToList> retList = new ArrayList<>();

        List<Cottage> cottages = cottageService.findAll();
        for (Offer o : cottages) {
            retList.add(new OfferToList(o));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @DeleteMapping("/cottages/{cottageId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteCottage(@PathVariable Integer cottageId) {
        try {
            Cottage cottage = cottageService.findById(cottageId);
            if (cottage == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            cottageService.deleteCottage(cottage);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/lessons")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<OfferToList>> loadAllFishingLessons() {
        List<OfferToList> retList = new ArrayList<>();

        List<FishingLesson> fishingLessons = fishingLessonService.findAll();
        for (Offer o : fishingLessons) {
            retList.add(new OfferToList(o));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @DeleteMapping("/lessons/{lessonId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteFishingLesson(@PathVariable Integer lessonId) {
        try {
            FishingLesson fishingLesson = fishingLessonService.findById(lessonId);
            if (fishingLesson == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            fishingLessonService.deleteFishingLesson(fishingLesson);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/boats")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<OfferToList>> loadAllBoats() {
        List<OfferToList> retList = new ArrayList<>();

        List<Boat> boats = boatService.findAll();
        for (Offer o : boats) {
            retList.add(new OfferToList(o));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @DeleteMapping("/boats/{boatId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteBoat(@PathVariable Integer boatId) {
        try {
            Boat boat = boatService.findById(boatId);
            if (boat == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            boatService.deleteBoat(boat);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/service_providers")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<ServiceProvidersToList>> loadAllServiceProviders() {
        List<User> users = this.userService.findAll();
        List<ServiceProvidersToList> serviceProvidersDataTableDTO = new ArrayList<>();
        for(User user : users)
        {
            if(user.getRoles().get(0).getName().equals("ROLE_INSTRUCTOR") ||
                    user.getRoles().get(0).getName().equals("ROLE_COTTAGE_OWNER")
                    || user.getRoles().get(0).getName().equals("ROLE_BOAT_OWNER"))
                serviceProvidersDataTableDTO.add(new ServiceProvidersToList((ServiceProvider)user));
        }

        return new ResponseEntity<>(serviceProvidersDataTableDTO, HttpStatus.OK);
    }

    @DeleteMapping("/service_providers/{providerId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteServiceProvider(@PathVariable Integer providerId) {
        try {
            User serviceProvider = userService.findById(providerId);
            if (serviceProvider == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            userService.deleteUser(serviceProvider);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/clients")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<UserDataTable>> loadAllClients() {
        List<User> users = this.userService.findAll();
        List<UserDataTable> userDataTableDTO = new ArrayList<>();
        for(User user : users)
        {
            if(user.getRoles().get(0).getName().equals("ROLE_CLIENT"))
                userDataTableDTO.add(new UserDataTable(user));
        }

        return new ResponseEntity<>(userDataTableDTO, HttpStatus.OK);
    }

    @DeleteMapping("/clients/{clientId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteClient(@PathVariable Integer clientId) {
        try {
            User client = userService.findById(clientId);
            if (client == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            userService.deleteUser(client);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/administrators")
    @PreAuthorize("hasAnyRole('SUPER_ADMIN')")
    public ResponseEntity<List<UserDataTable>> loadAllAdministrators() {
        List<User> users = this.userService.findAll();
        List<UserDataTable> userDataTableDTO = new ArrayList<>();
        for(User user : users)
        {
            if(user.getRoles().get(0).getName().equals("ROLE_ADMIN"))
                userDataTableDTO.add(new UserDataTable(user));
        }

        return new ResponseEntity<>(userDataTableDTO, HttpStatus.OK);
    }

    @DeleteMapping("/administrators/{adminId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity deleteAdministrator(@PathVariable Integer adminId) {
        try {
            User administrator = userService.findById(adminId);
            if (administrator == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            userService.deleteUser(administrator);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
