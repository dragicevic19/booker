package com.example.demo.model;


import javax.persistence.*;

@Entity
public class LoyaltyProgram {

    @Id
    @SequenceGenerator(name = "loyaltySeqGen", sequenceName = "loyaltySeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "loyaltySeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "points", unique = false, nullable = false)
    private int points;

    @Column(name = "rank", unique = false, nullable = false)
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

    public Integer getId() {
        return id;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void setRank(LoyaltyRank rank) {
        this.rank = rank;
    }
}
