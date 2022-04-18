package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public abstract class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    protected Integer id;

    @Column(name = "name", unique = false, nullable = false)
    protected String name; // title

    @Column(name = "description", unique = false, nullable = false)
    protected String description;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    protected Address address;

    @Column(name = "capacity", unique = false, nullable = false)
    protected int capacity;

    @Column(name = "regulations", unique = false, nullable = false)
    protected String regulations;

    @Column(name = "cancellation_fee", unique = false, nullable = false)
    protected double cancellationFee;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    protected List<Period> periodsOfOccupancy;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    protected Set<AdditionalService> additionalServices = new HashSet<AdditionalService>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_id", referencedColumnName = "id")
    protected List<Discount> discounts;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "rating_id", referencedColumnName = "id")
    protected Rating rating;

    @ElementCollection
    @Column(name = "images")
    protected List<String> images;

    @OneToMany(mappedBy = "offer", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    protected List<Reservation> reservations;

    @Column(name = "deleted")
    protected boolean deleted;

    public abstract int calculatePrice();

}
