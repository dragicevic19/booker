package com.example.demo.model;

import org.springframework.data.repository.cdi.Eager;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class BoatOwner extends PropertyOwner {

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "boat_owner_id")
    private List<Boat> boats;

    public BoatOwner() {
        this.boats = new ArrayList<Boat>();
    }

    public BoatOwner(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
        this.boats = new ArrayList<Boat>();
    }

    public List<Boat> getBoats() {
        return boats;
    }

    public void addBoat(Boat boat) {
        this.boats.add(boat);
    }

    public void setBoats(List<Boat> boats) {
        this.boats = boats;
    }
}
