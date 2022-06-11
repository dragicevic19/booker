package com.example.demo.dto;

import com.example.demo.model.Client;
import com.example.demo.model.Reservation;
import org.apache.tomcat.jni.Local;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class ReservationDTO {

    private ClientDTO client;
    private String text;
    private LocalDate startDate;
    private LocalDate endDate;
    private int typeId;


    public ReservationDTO(Reservation r) {
        client = new ClientDTO(r.getClient());
        this.text = "Reserved";
        this.startDate = r.getReservationPeriod().getDateFrom();
        this.endDate = r.getReservationPeriod().getDateTo();
        this.typeId = 3;    // na frontu ovo znaci da je obicna res
    }
}
