package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public abstract class ServiceProvider extends User {

    @OneToOne
    @JoinColumn(name = "loyalty_id", referencedColumnName = "id")
    private LoyaltyProgram loyaltyProgram;

    public ServiceProvider() {
    }

    public ServiceProvider(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
        this.loyaltyProgram = new LoyaltyProgram(0, LoyaltyRank.REGULAR);
    }

    public LoyaltyProgram getLoyaltyProgram() {
        return loyaltyProgram;
    }
}
