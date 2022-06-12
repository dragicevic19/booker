package com.example.demo.dto;

import com.example.demo.model.User;
import lombok.Getter;
import lombok.Setter;


// DTO koji kreira zahtev za brisanje naloga
@Getter
@Setter
public class DeletionRequest {

    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String country;
    private String city;
    private String street;
    private String phoneNumber;
    private String type;
    private String requestText;

    public DeletionRequest(User u)
    {

    }
}
