package com.example.demo.model;

public abstract class PropertyOwner extends ServiceProvider {

    public PropertyOwner() {
    }

    public PropertyOwner(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
    }

}
