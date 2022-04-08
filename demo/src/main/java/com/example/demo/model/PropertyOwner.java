package com.example.demo.model;

public abstract class PropertyOwner extends ServiceProvider {

    public PropertyOwner() {
    }

    public PropertyOwner(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
    }

}
