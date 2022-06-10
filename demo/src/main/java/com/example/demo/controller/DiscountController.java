package com.example.demo.controller;

import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.model.Cottage;
import com.example.demo.model.Offer;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/")
public class DiscountController {

    @Autowired
    private OfferService offerService;

    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @PostMapping("newDiscount/{offerId}")
    public ResponseEntity<Offer> newDiscount(@PathVariable Integer offerId, @RequestBody NewDiscountDTO newDiscount) {

        Offer offer = offerService.findById(offerId);
        if (offer == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        offer = offerService.addDiscountToOffer(offer, newDiscount);
        return new ResponseEntity<>(offer, HttpStatus.OK);
    }

}
