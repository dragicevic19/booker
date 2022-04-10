package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Offer {

    @Id
    @SequenceGenerator(name = "offerSeqGen", sequenceName = "offerSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offerSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "name", unique = false, nullable = false)
    private String name; // title

    @Column(name = "description", unique = false, nullable = false)
    private String description;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Column(name = "capacity", unique = false, nullable = false)
    private int capacity;

    @Column(name = "regulations", unique = false, nullable = false)
    private String regulations;

    @Column(name = "cancellation_fee", unique = false, nullable = false)
    private double cancellationFee;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    private List<Period> periodsOfOccupancy;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    private List<AdditionalService> additionalServices;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    private List<Discount> discounts;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "rating_id", referencedColumnName = "id")
    private Rating rating;

    @ElementCollection
    @Column(name = "images")
    private List<String> images;

    @OneToMany(mappedBy = "offer", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @Column(name = "deleted")
    private boolean deleted;

    public Offer() {
    }

    public Offer(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.capacity = capacity;
        this.regulations = regulations;
        this.cancellationFee = cancellationFee;
        this.additionalServices = additionalServices;
        this.periodsOfOccupancy = new ArrayList<Period>();
        this.discounts = new ArrayList<Discount>();
        this.images = new ArrayList<String>();
        this.reservations = new ArrayList<Reservation>();
        this.deleted = false;
        this.rating = new Rating(0, 0);
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

    public void setImages(List<String> images) {
        this.images = images;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public Integer getId() {
        return id;
    }

    public List<String> getImages() {
        return images;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public abstract int calculatePrice();
}
