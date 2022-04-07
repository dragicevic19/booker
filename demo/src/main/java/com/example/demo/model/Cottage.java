package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Cottage extends Property {

    public Cottage() {}

    public Cottage(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice) {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices,dailyPrice );
    }

    @Override
    public int calculatePrice() {
        return 0;
    }
}
