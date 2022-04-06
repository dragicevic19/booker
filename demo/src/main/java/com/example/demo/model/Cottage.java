package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Cottage extends Property {


    private String type;

    public Cottage(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice, String type) {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices,dailyPrice );

        this.type = type;
    }

    public Cottage() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
