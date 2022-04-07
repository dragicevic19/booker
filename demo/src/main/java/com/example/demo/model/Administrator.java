package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
public class Administrator extends User{

    public Administrator() {
    }

    public Administrator(String email, String name, String lastName, Address address, String phoneNumber) {
        super(email, name, lastName, address, phoneNumber);
    }
}
