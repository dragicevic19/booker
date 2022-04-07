package com.example.demo.model;

import javax.persistence.*;
import java.util.List;


@Entity
public class Reservation {

    @Id
    @SequenceGenerator(name = "reservationSeqGen", sequenceName = "reservationSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservationSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "offer_id")
    private Offer offer;

    @Column(name = "price", unique = false, nullable = false)
    private double price;

    @Column(name = "num_of_attendants", unique = false, nullable = false)
    private int numOfAttendants;

    @Column(name = "has_owner_rated", unique = false, nullable = false)
    private boolean hasOwnerRated;

    @Column(name = "has_client_rated", unique = false, nullable = false)
    private boolean hasClientRated;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "period_id", nullable = false)
    private Period reservationPeriod;

    @OneToMany(mappedBy = "reservation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name="additional_services")
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
