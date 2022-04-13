package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
public class AdditionalService {

    @Id
    @SequenceGenerator(name = "additionalServiceSeqGen", sequenceName = "additionalServiceSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "additionalServiceSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "title", unique = false, nullable = false)
    private String title;

    @Column(name = "price", unique = false, nullable = false)
    private int price;

    @Column(name = "description", unique = false, nullable = false)
    private String description;

    @ManyToMany(mappedBy = "chosenAdditionalServices")
    private Set<Reservation> reservations = new HashSet<Reservation>();

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "offer_id")
//    private Offer offer;

    public AdditionalService() {
    }

    public AdditionalService(String title, int price, String description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Set<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservations = reservations;
    }

//    public Offer getOffer() {
//        return offer;
//    }
//
//    public void setOffer(Offer offer) {
//        this.offer = offer;
//    }
}
