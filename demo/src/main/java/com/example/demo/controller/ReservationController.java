package com.example.demo.controller;

import com.example.demo.dto.ClientDTO;
import com.example.demo.dto.NewReservationDTO;
import com.example.demo.dto.OfferDTO;
import com.example.demo.dto.ResReportForClientDTO;
import com.example.demo.model.Client;
import com.example.demo.model.Offer;
import com.example.demo.model.Reservation;
import com.example.demo.model.ServiceProvider;
import com.example.demo.service.OfferService;
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

    @Autowired
    OfferService offerService;


    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @PostMapping("newReservationOwner/{reservationId}/{offerId}")
    public ResponseEntity<Boolean> newReservationByOwner(@PathVariable Integer reservationId,
                                                         @PathVariable Integer offerId,
                                                         @RequestBody NewReservationDTO newReservation) {

        Reservation reservation = reservationService.findById(reservationId);
        if (reservation == null) {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
        Offer offer = offerService.findById(offerId);
        if (offer == null) {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }

        Client client = reservationService.findClientForReservation(reservation);
        if (client == null) {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }

        if (reservationService.makeNewReservationByOwner(offer, client, newReservation)) {
            return new ResponseEntity<>(true, HttpStatus.OK);   // ok
        }

        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }


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

    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @GetMapping("reservation/offer/{reservationId}")
    public ResponseEntity<OfferDTO> getOfferForReservation(@PathVariable Integer reservationId) {

        Reservation reservation = reservationService.findById(reservationId);
        if (reservation == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        Offer offer = reservationService.findOfferForReservation(reservation);
        if (offer == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new OfferDTO(offer), HttpStatus.OK);
    }


    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @PostMapping("reservation/svcProvReport/{reservationId}")
    public ResponseEntity<Boolean> reportForClient(@PathVariable Integer reservationId, @RequestBody ResReportForClientDTO report) {
        Reservation reservation = reservationService.findById(reservationId);
        if (reservation == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        Offer offer = reservationService.findOfferForReservation(reservation);
        if (offer == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        Client client = reservationService.findClientForReservation(reservation);
        if (client == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        ServiceProvider svcProvider = reservationService.findOwnerOfOffer(offer);
        if (svcProvider == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        if (reservationService.makeNewReportForClient(report, client, svcProvider, reservation)) {
            return new ResponseEntity<>(true, HttpStatus.OK);   // ok
        }

        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

}
