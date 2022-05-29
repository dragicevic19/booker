package com.example.demo.controller;

import com.example.demo.dto.OfferToList;
import com.example.demo.model.Offer;
import com.example.demo.model.Property;
import com.example.demo.model.PropertyOwner;
import com.example.demo.model.ServiceProvider;
import com.example.demo.service.OfferService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "api/")
public class ServiceProviderController {

    @Autowired
    private UserService userService;

    @Autowired
    private OfferService offerService;

    @GetMapping("/my-offers/{userId}")
    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    public ResponseEntity<List<OfferToList>> loadOffers(@PathVariable Integer userId) {
        List<OfferToList> retList = new ArrayList<>();
        ServiceProvider u = (ServiceProvider) userService.findById(userId);

        if (u == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Offer> offers = userService.findUsersOffers(u);
        for (Offer o : offers) {
            retList.add(new OfferToList(o));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @DeleteMapping("/my-offers/{offerId}")
    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    public ResponseEntity deleteOffer(@PathVariable Integer offerId) {
        try {
            Offer offer = offerService.findById(offerId);
            if (offer == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            offerService.deleteOffer(offer);

        } catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
