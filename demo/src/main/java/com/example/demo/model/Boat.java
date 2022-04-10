package com.example.demo.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
public class Boat extends Property {

    @Column(name = "type", unique = false, nullable = false)
    private BoatType type;

    @Column(name = "length", unique = false, nullable = false)
    private int length;

    @Column(name = "engine_num", unique = true, nullable = false)
    private String engineNum;

    @Column(name = "engine_pow", unique = false, nullable = false)
    private int enginePow;

    @Column(name = "max_speed", unique = false, nullable = false)
    private int maxSpeed;

    @ElementCollection
    @Column(name = "nav_equipment")
    private List<String> navEquipment;

    @ElementCollection
    @Column(name = "fishing_equipment")
    private List<String> fishingEquipment;


    public Boat() {
    }

    public Boat(String name, String description, Address address, int capacity, String regulations,
                double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice,
                BoatType type, int length, String engineNum, int enginePow, int maxSpeed,
                List<String> navEquipment, List<String> fishingEquipment) {

        super(name, description, address, capacity, regulations, cancellationFee, additionalServices, dailyPrice);
        this.type = type;
        this.length = length;
        this.engineNum = engineNum;
        this.enginePow = enginePow;
        this.maxSpeed = maxSpeed;
        this.navEquipment = navEquipment;
        this.fishingEquipment = fishingEquipment;
    }

    public BoatType getType() {
        return type;
    }

    public void setType(BoatType type) {
        this.type = type;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public String getEngineNum() {
        return engineNum;
    }

    public void setEngineNum(String engineNum) {
        this.engineNum = engineNum;
    }

    public int getEnginePow() {
        return enginePow;
    }

    public void setEnginePow(int enginePow) {
        this.enginePow = enginePow;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public List<String> getNavEquipment() {
        return navEquipment;
    }

    public void setNavEquipment(List<String> navEquipment) {
        this.navEquipment = navEquipment;
    }

    public List<String> getFishingEquipment() {
        return fishingEquipment;
    }

    public void setFishingEquipment(List<String> fishingEquipment) {
        this.fishingEquipment = fishingEquipment;
    }

    @Override
    public int calculatePrice() {
        // TODO
        return 0;
    }
}
