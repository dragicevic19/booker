package com.example.demo.dto;

import com.example.demo.model.Client;
import com.example.demo.model.Offer;
import com.example.demo.model.Period;
import com.example.demo.model.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationToList {

    private Integer id;
    private String offerName;
    private String client;
    private String clientImg;
    private String city;
    private Double price;
    private String status;
    private Integer capacity;
    private String img;
    private String period;

    public ReservationToList(Reservation r, Offer offer, Client client){
        this.id = r.getId();
        this.offerName = offer.getName();
        this.client = client.getFirstName() + " " + client.getLastName();
//        this.clientImg = (r.getClient().getImages().size() > 0) ? r.getClient().getImages().get(0) : null;
        this.city = offer.getAddress().getCity();
        this.price = r.getPrice();
        this.status = setStatus(r.getReservationPeriod());
        this.capacity = r.getNumOfAttendants();
        this.img = (offer.getImages().size() > 0) ? offer.getImages().get(0) : null;
        this.period = r.getReservationPeriod().toString();
    }

    private String setStatus(Period reservationPeriod) { // da li je rezervacija u toku
        String retString = "";                          // da vlasnik moze da produzi ako jeste

        if ((reservationPeriod.getDateFrom().isAfter(LocalDate.now()) && reservationPeriod.getDateTo().isBefore(LocalDate.now()))
        || (reservationPeriod.getDateFrom().isEqual(LocalDate.now())) || (reservationPeriod.getDateTo().isEqual(LocalDate.now())))
            retString = "now";

        return retString;
    }

}
