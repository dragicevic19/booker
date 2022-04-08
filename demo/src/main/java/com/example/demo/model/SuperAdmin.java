package com.example.demo.model;

import javax.persistence.Entity;

@Entity
public class SuperAdmin extends Administrator{

    public SuperAdmin() {
    }

    public SuperAdmin(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
    }
}
