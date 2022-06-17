package com.example.demo.service;

import com.example.demo.dto.AdditionalServiceDTO;
import com.example.demo.dto.NewReservationDTO;
import com.example.demo.model.*;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.OfferRepository;
import com.example.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    OfferRepository offerRepository;

    @Autowired
    AdditionalServicesService additionalServicesService;

    @Autowired
    OfferService offerService;

    @Autowired
    EmailService emailService;

    @Override
    public Reservation findById(Integer reservationId) {
        return reservationRepository.getById(reservationId);
    }

    @Override
    public Client findClientForReservation(Reservation reservation) {
        for (Client client : clientRepository.findAll())
            for (Reservation res : client.getReservations())
                if (res.getId() == reservation.getId())
                    return client;
        return null;
    }

    @Override
    public Offer findOfferForReservation(Reservation reservation) {
        for (Offer offer : offerRepository.findAll())
            for (Reservation res : offer.getReservations())
                if (res.getId() == reservation.getId())
                    return offer;
        return null;
    }

    @Override
    public boolean makeNewReservationByOwner(Offer offer, Client client, NewReservationDTO newReservation) {

        if (!offerService.isPeriodAvailable(newReservation.getStartDate(), newReservation.getEndDate(), offer)){
            return false;
        }
        Reservation newRes = new Reservation();
        Period period = new Period(newReservation.getStartDate(), newReservation.getEndDate());
        newRes.setReservationPeriod(period);

        Set<AdditionalService> additionalServices = new HashSet<>();
        for(AdditionalServiceDTO service : newReservation.getAdditionalServices()){
            additionalServices.add(additionalServicesService.findById(service.getValue()));
        }
        newRes.setChosenAdditionalServices(additionalServices);

        newRes.setHasOwnerRated(false);
        newRes.setHasClientRated(false);
        newRes.setNumOfAttendants(newReservation.getNumOfAttendants());
        newRes.setPrice(newReservation.getPrice());

        offer.getReservations().add(newRes);
        offer.getPeriodsOfOccupancy().add(period);

        client.getReservations().add(newRes);

        emailService.sendReservationConfirmationToClient(client, offer, newRes);

        reservationRepository.save(newRes);

        return true;
    }
}
