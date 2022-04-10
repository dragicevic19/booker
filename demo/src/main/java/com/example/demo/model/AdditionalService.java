package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class AdditionalService {
    // da li u bazi da imamo tabelu sa svim mogucim dodatnim uslugama za neki Offer
    // pa onda da u rezervaciji imamo ManyToMany vezu (one usluge koje korisnik izabere od ponudjenih za datu ponudu)?

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
}
