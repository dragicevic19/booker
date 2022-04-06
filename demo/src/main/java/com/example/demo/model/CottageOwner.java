package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class CottageOwner extends PropertyOwner{

    private List<Cottage> cottages;

    public CottageOwner() {
        this.cottages = new ArrayList<Cottage>();
    }

    public CottageOwner(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
        this.cottages = new ArrayList<Cottage>();
    }

    public List<Cottage> getCottages() {
        return cottages;
    }



    public void addCottage(Cottage cottage) {
        this.cottages.add(cottage);
    }
}
