package com.example.demo.model;

public abstract class ServiceProvider extends User {
    private LoyaltyProgram loyaltyProgram;

    public ServiceProvider() {
    }

    public ServiceProvider(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
        this.loyaltyProgram = new LoyaltyProgram(0, LoyaltyRank.REGULAR);
    }

    public LoyaltyProgram getLoyaltyProgram() {
        return loyaltyProgram;
    }
}
