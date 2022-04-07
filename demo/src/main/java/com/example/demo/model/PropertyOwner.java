package com.example.demo.model;

public abstract class PropertyOwner extends ServiceProvider {

    public PropertyOwner() {
    }

    public PropertyOwner(String email, String name, String lastName, Address address, String phoneNumber) {
        super(email, name, lastName, address, phoneNumber);
    }

}
