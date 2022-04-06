package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class Boat extends Property{

    private String type;
    private int lenght;
    private int engineNum;//string?
    private int enginePow;
    private int maxSpeed;
    private List<String> navEquipment;
    private List<String> fishingEquipment;


    public Boat(String name, String description, Address address, int capacity, String regulations, double cancellationFee, List<AdditionalService> additionalServices, int dailyPrice,String type, int lenght, int engineNum, int enginePow, int maxSpeed, List<String> navEquipment, List<String> fishingEquipment) {
        super(name,description, address, capacity, regulations, cancellationFee, additionalServices,dailyPrice );
        this.type = type;
        this.lenght = lenght;
        this.engineNum = engineNum;
        this.enginePow = enginePow;
        this.maxSpeed = maxSpeed;
        this.navEquipment = navEquipment;
        this.fishingEquipment = fishingEquipment;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getLenght() {
        return lenght;
    }

    public void setLenght(int lenght) {
        this.lenght = lenght;
    }

    public int getEngineNum() {
        return engineNum;
    }

    public void setEngineNum(int engineNum) {
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
        return 0; //treba overrajdovati
    }
}
