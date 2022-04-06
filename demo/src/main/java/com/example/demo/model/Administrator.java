package com.example.demo.model;

public class Administrator extends User{

    public Administrator() {
    }

    public Administrator(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
    }
}
