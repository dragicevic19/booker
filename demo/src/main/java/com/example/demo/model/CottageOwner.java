package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class CottageOwner extends PropertyOwner{

    @OneToMany(mappedBy = "cottage_owner", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name="cottages")
    private List<Cottage> cottages;

    public CottageOwner() {
        this.cottages = new ArrayList<Cottage>();
    }

    public CottageOwner(String email, String name, String lastName, Address address, String phoneNumber) {
        super(email, name, lastName, address, phoneNumber);
        this.cottages = new ArrayList<Cottage>();
    }

    public List<Cottage> getCottages() {
        return cottages;
    }



    public void addCottage(Cottage cottage) {
        this.cottages.add(cottage);
    }
}
