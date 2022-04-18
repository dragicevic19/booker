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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdditionalService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

}
