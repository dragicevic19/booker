package com.example.demo.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
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

    public Rating(){
        numOfVotes = 0;
        average = 0;
    }
}
