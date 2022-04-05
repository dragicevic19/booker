package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class BoatOwner extends PropertyOwner {

    private List<Boat> boats;

    public BoatOwner() {
        this.boats = new ArrayList<Boat>();
    }

    public BoatOwner(Integer id, String email, String name, String lastName, Address address, String phoneNumber, LoyaltyProgram loyaltyProgram) {
        super(id, email, name, lastName, address, phoneNumber, loyaltyProgram);
        this.boats = new ArrayList<Boat>();
    }


    public List<Boat> getBoats() {
        return boats;
    }

    public void addBoat(Boat boat) {
        this.boats.add(boat);
    }

}
