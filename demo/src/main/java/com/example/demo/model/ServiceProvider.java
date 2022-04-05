package com.example.demo.model;

public abstract class ServiceProvider extends User {
    private LoyaltyProgram loyaltyProgram;

    public ServiceProvider() {
    }

    public ServiceProvider(Integer id, String email, String name, String lastName, Address address, String phoneNumber, LoyaltyProgram loyaltyProgram) {
        super(id, email, name, lastName, address, phoneNumber);
        this.loyaltyProgram = loyaltyProgram;
    }




}
