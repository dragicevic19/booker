package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Property extends Offer {


    private int dailyPrice;

    public Property(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice)
    {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices );
        this.dailyPrice = dailyPrice;
    }

    public int getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(int dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    public abstract int calculatePrice();
}
