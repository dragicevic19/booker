package com.example.demo.controller;

import com.example.demo.dto.DiscountDTO;
import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.model.Cottage;
import com.example.demo.model.Discount;
import com.example.demo.model.Offer;
import com.example.demo.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
        if (offer == null){
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(offer, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @GetMapping("discounts/{offerId}")
    public ResponseEntity<List<DiscountDTO>> discountsForOffer(@PathVariable Integer offerId) {

        Offer offer = offerService.findById(offerId);
        if (offer == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        List<DiscountDTO> retList = new ArrayList<>();
        for(Discount discount : offer.getDiscounts()){
            retList.add(new DiscountDTO(discount));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }


}
