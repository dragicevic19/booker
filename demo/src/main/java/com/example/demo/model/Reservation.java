package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
