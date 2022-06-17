package com.example.demo.service;

import com.example.demo.dto.NewReservationDTO;
import com.example.demo.model.Client;
import com.example.demo.model.Offer;
import com.example.demo.model.Reservation;

public interface ReservationService {
    Reservation findById(Integer reservationId);

    Client findClientForReservation(Reservation reservation);

    Offer findOfferForReservation(Reservation reservation);

    boolean makeNewReservationByOwner(Offer offer, Client client, NewReservationDTO newReservation);
}
