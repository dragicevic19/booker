package com.example.demo.model;

public class SuperAdmin extends Administrator{

    public SuperAdmin() {
    }

    public SuperAdmin(String email, String name, String lastName, Address address, String phoneNumber) {
        super(email, name, lastName, address, phoneNumber);
    }
}
