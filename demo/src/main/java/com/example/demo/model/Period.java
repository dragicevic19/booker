package com.example.demo.model;

import java.util.Date;

public class Period {

    private Date dateFrom;
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
}
