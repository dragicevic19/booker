package com.example.demo.dto;

import com.example.demo.model.User;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserData {


    private String firstName;

    private String lastName;

    private String email;

    private String country;

    private String city;

    private String street;

    private String phoneNumber;


    public UserData(User u){
        this.firstName = u.getFirstName();
        this.lastName = u.getLastName();
        this.email = u.getEmail();
        this.phoneNumber = u.getPhoneNumber();
        this.country = u.getAddress().getCountry();
        this.city = u.getAddress().getCity();
        this.street = u.getAddress().getStreet();

    }
}

