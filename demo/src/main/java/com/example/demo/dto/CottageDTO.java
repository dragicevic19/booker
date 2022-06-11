package com.example.demo.dto;

import com.example.demo.model.Cottage;

public class CottageDTO extends OfferDTO {

    private int numOfRooms;

    public CottageDTO(Cottage cottage) {
        super(cottage);
        numOfRooms = cottage.getNumOfRooms();
    }
}
