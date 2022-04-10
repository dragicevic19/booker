package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;


@Entity
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

    public Period(){
    }

    public Period(Date dateFrom, Date dateTo) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
    }
}
