package com.example.demo.model;

import java.util.List;

public class Reservation { //Bojane dodaj ostale klase (Offer, AdditionalService...)

    private Client client;
    private Offer offer;
    private double price;
    private int numOfAttendants;
    private boolean hasOwnerRated;
    private boolean hasClientRated;
    private Period reservationPeriod;
    private List<AdditionalService> chosenAdditionalServices;

    public Reservation(){
    }

    public Reservation(Client client, Offer offer, double price, int numOfAttendants, boolean hasOwnerRated, boolean hasClientRated, Period reservationPeriod, List<AdditionalService> chosenAdditionalServices) {
        this.client = client;
        this.offer = offer;
        this.price = price;
        this.numOfAttendants = numOfAttendants;
        this.hasOwnerRated = hasOwnerRated;
        this.hasClientRated = hasClientRated;
        this.reservationPeriod = reservationPeriod;
        this.chosenAdditionalServices = chosenAdditionalServices;
    }

    public Client getClient() {
        return client;
    }

    public Offer getOffer() {
        return offer;
    }

    public double getPrice() {
        return price;
    }

    public int getNumOfAttendants() {
        return numOfAttendants;
    }

    public boolean isHasOwnerRated() {
        return hasOwnerRated;
    }

    public boolean isHasClientRated() {
        return hasClientRated;
    }

    public Period getReservationPeriod() {
        return reservationPeriod;
    }

    public List<AdditionalService> getChosenAdditionalServices() {
        return chosenAdditionalServices;
    }
}
