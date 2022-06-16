package com.example.demo.controller;

import com.example.demo.dto.ClientDTO;
import com.example.demo.model.Client;
import com.example.demo.model.Reservation;
import com.example.demo.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @GetMapping("reservation/client/{reservationId}")
    public ResponseEntity<ClientDTO> getClientForReservation(@PathVariable Integer reservationId) {

        Reservation reservation = reservationService.findById(reservationId);
        if (reservation == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        Client client = reservationService.findClientForReservation(reservation);
        if (client == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ClientDTO(client), HttpStatus.OK);
    }
}
