package com.example.demo.service;

import com.example.demo.model.Client;
import com.example.demo.model.Reservation;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    ClientRepository clientRepository;

    @Override
    public Reservation findById(Integer reservationId) {
        return reservationRepository.getById(reservationId);
    }

    @Override
    public Client findClientForReservation(Reservation reservation) {
        for(Client client : clientRepository.findAll())
            for(Reservation res : client.getReservations())
                if (res.getId() == reservation.getId())
                    return client;
        return null;
    }
}
