package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Period {


    @Id
    @SequenceGenerator(name = "periodSeqGen", sequenceName = "periodSeq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "periodSeqGen")
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "date_from", unique = false, nullable = false)
    private Date dateFrom;

    @Column(name = "date_to", unique = false, nullable = false)
    private Date dateTo;

}
