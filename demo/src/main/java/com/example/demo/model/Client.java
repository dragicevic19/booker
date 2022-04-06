package com.example.demo.model;

import java.util.*;

public class Client extends User{

    private int numOfPenalties;
    private LoyaltyProgram loyaltyProgram;
    private List<Reservation> reservations;

    public Client() {
    }

    public Client(Integer id, String email, String name, String lastName, Address address, String phoneNumber) {
        super(id, email, name, lastName, address, phoneNumber);
        this.numOfPenalties = 0;
        this.loyaltyProgram = new LoyaltyProgram(0, LoyaltyRank.REGULAR);
        this.reservations = new ArrayList<Reservation>();
    }

    public int getNumOfPenalties() {
        return numOfPenalties;
    }

    public LoyaltyProgram getLoyaltyProgram() {
        return loyaltyProgram;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }
}
