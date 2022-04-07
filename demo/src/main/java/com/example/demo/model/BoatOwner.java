package com.example.demo.model;

import org.springframework.data.repository.cdi.Eager;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class BoatOwner extends PropertyOwner {

    //@OneToMany(mappedBy = "boat_owner", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name="boats")
    @OneToMany
    private List<Boat> boats;

    public BoatOwner() {
        this.boats = new ArrayList<Boat>();
    }

    public BoatOwner(String email, String name, String lastName, Address address, String phoneNumber) {
        super(email, name, lastName, address, phoneNumber);
        this.boats = new ArrayList<Boat>();
    }

    public List<Boat> getBoats() {
        return boats;
    }

    public void addBoat(Boat boat) {
        this.boats.add(boat);
    }

}
