package com.example.demo.model;

public class Address {
    // id?
    private String address;
    private String city;
    private String country;

    public Address() {}
    public Address(String address, String city, String country) {
        this.address = address;
        this.city = city;
        this.country = country;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }
}
