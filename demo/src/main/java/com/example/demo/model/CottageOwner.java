package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class CottageOwner extends PropertyOwner{

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="cottage_owner_id")
    private List<Cottage> cottages;

    public CottageOwner() {
        this.cottages = new ArrayList<Cottage>();
    }

    public CottageOwner(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
        this.cottages = new ArrayList<Cottage>();
    }

    public List<Cottage> getCottages() {
        return cottages;
    }

    public void addCottage(Cottage cottage) {
        this.cottages.add(cottage);
    }
}
