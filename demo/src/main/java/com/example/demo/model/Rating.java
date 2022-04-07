package com.example.demo.model;


import javax.persistence.*;

@Entity
public class Rating {

    @Id
    @SequenceGenerator(name = "ratingSeqGen", sequenceName = "ratingSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ratingSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "num_of_votes", unique = false, nullable = false)
    private int numOfVotes;

    @Column(name = "average", unique = false, nullable = false)
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
