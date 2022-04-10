package com.example.demo.model;

import javax.persistence.*;
import java.util.*;


@Entity
public class Client extends User {

    @Column(name = "num_of_penalties", unique = false, nullable = false)
    private int numOfPenalties;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loyalty_id", nullable = false)
    private LoyaltyProgram loyaltyProgram;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @Column(name = "reservations")
    private List<Reservation> reservations;

    public Client() {
    }

    public Client(String email, String password, String name, String lastName, Address address, String phoneNumber) {
        super(email, password, name, lastName, address, phoneNumber);
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


    public void setNumOfPenalties(int numOfPenalties) {
        this.numOfPenalties = numOfPenalties;
    }

    public void setLoyaltyProgram(LoyaltyProgram loyaltyProgram) {
        this.loyaltyProgram = loyaltyProgram;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
