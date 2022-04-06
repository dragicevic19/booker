package com.example.demo.model;

public class SuperAdmin extends Administrator{

    public SuperAdmin() {
    }

    public SuperAdmin(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
    }
}
