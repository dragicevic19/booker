package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.*;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    OfferRepository offerRepository;

    @Autowired
    ServiceProviderRepository serviceProviderRepo;

    @Autowired
    ReservationReportForClientRepository reportsForClientRepository;

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
    public ServiceProvider findOwnerOfOffer(Offer offer) {
        for (ServiceProvider provider : serviceProviderRepo.findAll())
            for (Offer o : provider.getOffers())
                if (o.getId() == offer.getId()) return provider;

        return null;
    }

    @Override
    public ReservationsForMonth findReservationsForProviderForMonth(ServiceProvider svc, Integer month) {

        ReservationsForMonth resForMonth = new ReservationsForMonth(month);

        for (Offer offer : svc.getOffers()) {
            for (Reservation reservation : offer.getReservations()) {
                if (reservation.getReservationPeriod().getDateFrom().getMonthValue() == month) {

                    LocalDate startDate = reservation.getReservationPeriod().getDateFrom();
                    for (int i = startDate.getDayOfMonth(); i <= startDate.lengthOfMonth(); i++) {

                        String key = String.valueOf(i) + ". " + String.valueOf(month) + ".";

                        if (startDate.isBefore(reservation.getReservationPeriod().getDateTo()) ||
                                startDate.isEqual(reservation.getReservationPeriod().getDateTo())) {    // da li treba i equal?

                            resForMonth.getNumOfReservations().put(key, resForMonth.getNumOfReservations().get(key) + 1);

                            startDate.plusDays(1);
                        }
                        else {
                            break;
                        }
                    }
                }

                else if (reservation.getReservationPeriod().getDateTo().getMonthValue() == month) {
                    LocalDate endDate = reservation.getReservationPeriod().getDateTo();
                    for (int i = endDate.getDayOfMonth(); i > 0; i--) {

                        String key = String.valueOf(i) + ". " + String.valueOf(month) + ".";

                        if (endDate.isAfter(reservation.getReservationPeriod().getDateFrom()) ||
                                endDate.isEqual(reservation.getReservationPeriod().getDateFrom())) {

                            resForMonth.getNumOfReservations().put(key, resForMonth.getNumOfReservations().get(key) + 1);

                            endDate.minusDays(1);
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        return resForMonth;
    }

    @Override
    public ReservationsForMonth findReservationsForProviderForYear(ServiceProvider svc, Integer year) {
        ReservationsForMonth resForMonth = new ReservationsForMonth();

        for (Offer offer : svc.getOffers()) {
            for (Reservation reservation : offer.getReservations()) {
                if (reservation.getReservationPeriod().getDateFrom().getYear() == year) {

                    String month = reservation.getReservationPeriod().getDateFrom().getMonth().getDisplayName(TextStyle.FULL, Locale.ENGLISH);
                    resForMonth.getNumOfReservations().put(month, resForMonth.getNumOfReservations().get(month) + 1);
                }
                else if (reservation.getReservationPeriod().getDateTo().getYear() == year) {
                    String month = reservation.getReservationPeriod().getDateTo().getMonth().getDisplayName(TextStyle.FULL, Locale.ENGLISH);
                    resForMonth.getNumOfReservations().put(month, resForMonth.getNumOfReservations().get(month) + 1);
                }
            }
        }

        return resForMonth;
    }

    @Override
    public boolean makeNewReportForClient(ResReportForClientDTO report, Client client, ServiceProvider svcProvider,
                                          Reservation reservation) {

        ReservationReportForClient rep = new ReservationReportForClient();
        rep.setClient(client);
        rep.setReservation(reservation);
        rep.setComment(report.getComment());
        rep.setServiceProvider(svcProvider);
        if (report.getReportType() == 0) {
            rep.setType(ReportForClientType.BAD_USER);  // ovo ide kod admina pa ako on odobri klijent ce dobiti penal
        } else {
            rep.setType(ReportForClientType.USER_DID_NOT_SHOW_UP);
            client.setNumOfPenalties(client.getNumOfPenalties() + 1); // ?
        }

        reservation.setHasOwnerRated(true);
        reportsForClientRepository.save(rep);

        return true;
    }


    @Override
    public boolean makeNewReservationByOwner(Offer offer, Client client, NewReservationDTO newReservation) {

        if (!offerService.isPeriodAvailable(newReservation.getStartDate(), newReservation.getEndDate(), offer)) {
            return false;
        }
        Reservation newRes = new Reservation();
        Period period = new Period(newReservation.getStartDate(), newReservation.getEndDate());
        newRes.setReservationPeriod(period);

        Set<AdditionalService> additionalServices = new HashSet<>();
        for (AdditionalServiceDTO service : newReservation.getAdditionalServices()) {
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