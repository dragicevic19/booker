package com.example.demo.dto;


import com.example.demo.model.AdditionalService;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LessonRequest {
    private String name;
    private String country;
    private String city;
    private String address;
    private Double price;
    private Double fee;
    private String description;
    private String rules;
    private List<String> images;
    //private List<String> includedEquipment;
    private int maxNumAttendants;
    //private List<AdditionalService> additionalServices;
    private Integer owner_id;
}
