package com.example.demo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Discount {

    @Id
    @SequenceGenerator(name = "discountSeqGen", sequenceName = "discountSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "discountSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "period_id", referencedColumnName = "id")
    private Period period;
    //private int discount;

    @Column(name = "reduced_price", unique = false, nullable = false)
    private int reducedPrice;

    public Integer getId() {
        return id;
    }

    @Column(name = "is_acitve", unique = false, nullable = false)
    private boolean isActive;

    public Discount() {}

    public Discount(Period period, int reducedPrice, boolean isActive) {
        this.period = period;
        this.reducedPrice = reducedPrice;
        this.isActive = isActive;
    }

    public Period getPeriod() {
        return period;
    }

    public void setPeriod(Period period) {
        this.period = period;
    }

    public int getReducedPrice() {
        return reducedPrice;
    }

    public void setReducedPrice(int reducedPrice) {
        this.reducedPrice = reducedPrice;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
