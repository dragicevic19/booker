package com.example.demo.controller;

import com.example.demo.model.Boat;
import com.example.demo.model.BoatOwner;
import com.example.demo.model.Property;
import com.example.demo.model.User;
import com.example.demo.service.BoatOwnerService;
import com.example.demo.service.UserService;
import org.apache.coyote.Response;
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
@RequestMapping(value = "api/boat_owners")
public class BoatOwnerController {

    @Autowired
    private UserService userService;
    @Autowired
    private BoatOwnerService boatOwnerService;

//    @GetMapping("/myProperty/{userId}")
//    @PreAuthorize("hasRole('BOAT_OWNER')")
//    public ResponseEntity<List<Boat>> loadUsersBoats(@PathVariable Integer userId) {
//        BoatOwner u = (BoatOwner) userService.findById(userId);
//
//        if (u == null) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//
//        //List<Boat> properties = boatOwnerService.findAllMyBoats(u);
//        return new ResponseEntity<>(properties, HttpStatus.OK);
//    }
}
