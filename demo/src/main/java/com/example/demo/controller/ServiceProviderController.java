package com.example.demo.controller;

import com.example.demo.dto.UserData;
import com.example.demo.model.User;
import com.example.demo.model.Offer;
import com.example.demo.model.ServiceProvider;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/")
public class ServiceProviderController {

    @Autowired
    private UserService userService;

    @GetMapping("/my-offers/{userId}")
    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    public ResponseEntity<List<Offer>> loadOffers(@PathVariable Integer userId) {
        ServiceProvider u = (ServiceProvider) userService.findById(userId);

        if (u == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Offer> offers = userService.findUsersOffers(u);
        return new ResponseEntity<>(offers, HttpStatus.OK);
    }

    @GetMapping("/profile/{userId}")
    public ResponseEntity<UserData> loadUserData(@PathVariable Integer userId) {

        UserData usr =userService.findByIdData(userId);


        return new ResponseEntity<>(usr, HttpStatus.OK);
    }




}
