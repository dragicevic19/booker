package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CottageRequest {
    private String cottageName;
    private String country;
    private String city;
    private String street;
    private String description;
    private int numOfRooms;
    private int capacity;
    private String regulations;
    private double price;
    private double fee;
    private Integer owner_id;
}
