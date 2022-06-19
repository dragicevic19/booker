package com.example.demo.controller;

import com.example.demo.dto.*;
import com.example.demo.model.Client;
import com.example.demo.model.Offer;
import com.example.demo.model.Reservation;

import com.example.demo.service.ClientService;

import com.example.demo.model.ServiceProvider;

import com.example.demo.service.OfferService;
import com.example.demo.service.ReservationService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "api/")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @Autowired
    OfferService offerService;
    @Autowired
    ClientService clientService;

    @Autowired
    UserService userService;


    @PreAuthorize("hasRole('CLIENT')")
    @PostMapping("newReservationUser/{clientId}/{offerId}")
    public ResponseEntity<Boolean> newReservationByUser(@PathVariable Integer clientId,
                                                         @PathVariable Integer offerId,
                                                         @RequestBody NewReservationDTO newReservation) {


        Offer offer = offerService.findById(offerId);
        if (offer == null) {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }

        Client client = clientService.findById(clientId);
        if (client == null) {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }

        if (reservationService.makeNewReservationByOwner(offer, client, newReservation)) {
            return new ResponseEntity<>(true, HttpStatus.OK);   // ok
        }

        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

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


    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @GetMapping("reservations/monthly/{userId}/{month}")
    public ResponseEntity<List<ReservationsForMonthDTO>> reservationsForMonth(@PathVariable Integer month, @PathVariable Integer userId) {

        List<ReservationsForMonthDTO> retList = new ArrayList<>();
        ServiceProvider svc = (ServiceProvider) userService.findById(userId);

        ReservationsForMonth reservations = reservationService.findReservationsForProviderForMonth(svc, month);

        for (Map.Entry<String,Integer> entry : reservations.getNumOfReservations().entrySet())
            retList.add(new ReservationsForMonthDTO(entry.getKey(), entry.getValue()));

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('BOAT_OWNER', 'COTTAGE_OWNER', 'INSTRUCTOR')")
    @GetMapping("reservations/yearly/{userId}/{year}")
    public ResponseEntity<List<ReservationsForMonthDTO>> reservationsForYear(@PathVariable Integer year, @PathVariable Integer userId) {

        List<ReservationsForMonthDTO> retList = new ArrayList<>();
        ServiceProvider svc = (ServiceProvider) userService.findById(userId);

        ReservationsForMonth reservations = reservationService.findReservationsForProviderForYear(svc, year);

        for (Map.Entry<String,Integer> entry : reservations.getNumOfReservations().entrySet())
            retList.add(new ReservationsForMonthDTO(entry.getKey(), entry.getValue()));

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }
}
