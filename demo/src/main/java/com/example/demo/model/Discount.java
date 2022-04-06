package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Discount {

    private Period period;
    //private int discount;
    private int reducedPrice;
    private boolean isActive;

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
