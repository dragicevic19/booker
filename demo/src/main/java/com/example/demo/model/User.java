package com.example.demo.model;

import java.util.UUID;

public abstract class User {

    private Integer id;
    private String email;
    private String name;
    private String lastName;
    private Address address;
    private String phoneNumber;
    private Rating rating;

    public User() {
    }

    public User(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public Address getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
