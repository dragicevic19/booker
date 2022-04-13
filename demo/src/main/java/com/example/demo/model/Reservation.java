package com.example.demo.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
public class Reservation {

    @Id
    @SequenceGenerator(name = "reservationSeqGen", sequenceName = "reservationSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservationSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
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
    @JoinColumn(name = "period_id", referencedColumnName = "id")
    private Period reservationPeriod;

    @ManyToMany
    @JoinTable(name = "reservation_additional_services", joinColumns = @JoinColumn(name = "reservation_id", referencedColumnName= "id"), inverseJoinColumns = @JoinColumn(name = "additional_service_id", referencedColumnName = "id"))
    private Set<AdditionalService> chosenAdditionalServices = new HashSet<AdditionalService>();

    public Reservation() {
    }

    public Reservation(Client client, Offer offer, double price, int numOfAttendants, boolean hasOwnerRated,
                       boolean hasClientRated, Period reservationPeriod, Set<AdditionalService> chosenAdditionalServices) {
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

    public Set<AdditionalService> getChosenAdditionalServices() {
        return chosenAdditionalServices;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setNumOfAttendants(int numOfAttendants) {
        this.numOfAttendants = numOfAttendants;
    }

    public void setHasOwnerRated(boolean hasOwnerRated) {
        this.hasOwnerRated = hasOwnerRated;
    }

    public void setHasClientRated(boolean hasClientRated) {
        this.hasClientRated = hasClientRated;
    }

    public void setReservationPeriod(Period reservationPeriod) {
        this.reservationPeriod = reservationPeriod;
    }

    public void setChosenAdditionalServices(Set<AdditionalService> chosenAdditionalServices) {
        this.chosenAdditionalServices = chosenAdditionalServices;
    }
}
