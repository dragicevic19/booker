package com.example.demo.service;

import com.example.demo.model.Client;
import com.example.demo.model.Reservation;

public interface ReservationService {
    Reservation findById(Integer reservationId);

    Client findClientForReservation(Reservation reservation);
}
