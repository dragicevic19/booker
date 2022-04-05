package com.example.demo.model;

public class Rating {

    private int numOfVotes;
    private double average;

    public Rating() {
    }

    public Rating(int numOfVotes, double average) {
        this.numOfVotes = numOfVotes;
        this.average = average;
    }

    public int getNumOfVotes() {
        return numOfVotes;
    }

    public double getAverage() {
        return average;
    }
}
