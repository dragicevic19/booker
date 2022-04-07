package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;


@Entity
public abstract class Property extends Offer {

    @Column(name = "daily_price", unique = false, nullable = false)
    private int dailyPrice;

    public Property(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice)
    {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices );
        this.dailyPrice = dailyPrice;
    }

    public Property() {}

    public int getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(int dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    public abstract int calculatePrice();
}
