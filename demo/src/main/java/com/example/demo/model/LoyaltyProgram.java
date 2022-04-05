package com.example.demo.model;

public class LoyaltyProgram {
    private int points;
    private LoyaltyRank rank;

    public LoyaltyProgram() {}

    public LoyaltyProgram(int points, LoyaltyRank rank) {
        this.points = points;
        this.rank = rank;
    }

    public int getPoints() {
        return points;
    }

    public LoyaltyRank getRank() {
        return rank;
    }
}
