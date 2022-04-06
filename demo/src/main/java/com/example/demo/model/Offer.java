package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Offer {


    private String name;// title
    private String description;
    private Address address;
    private int capacity;
    private String regulations;
    private double cancellationFee;
    private List<Period> periodsOfOccupancy;
    private List<AdditionalService> additionalServices;
    private List<Discount> discounts;
    private Rating rating;

    public Offer(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.capacity = capacity;
        this.regulations = regulations;
        this.cancellationFee = cancellationFee;
        this.additionalServices = additionalServices;
        this.periodsOfOccupancy = new List<Period>;
        this.discounts = new List<Discount>;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getRegulations() {
        return regulations;
    }

    public void setRegulations(String regulations) {
        this.regulations = regulations;
    }

    public double getCancellationFee() {
        return cancellationFee;
    }

    public void setCancellationFee(double cancellationFee) {
        this.cancellationFee = cancellationFee;
    }

    public List<Period> getPeriodsOfOccupancy() {
        return periodsOfOccupancy;
    }

    public void setPeriodsOfOccupancy(List<Period> periodsOfOccupancy) {
        this.periodsOfOccupancy = periodsOfOccupancy;
    }

    public List<AdditionalService> getAdditionalServices() {
        return additionalServices;
    }

    public void setAdditionalServices(List<AdditionalService> additionalServices) {
        this.additionalServices = additionalServices;
    }

    public List<Discount> getDiscounts() {
        return discounts;
    }

    public void setDiscounts(List<Discount> discounts) {
        this.discounts = discounts;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public abstract int calculatePrice(){

    }




}
