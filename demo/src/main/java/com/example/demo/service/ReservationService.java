package com.example.demo.service;

import com.example.demo.dto.NewReservationDTO;
import com.example.demo.dto.ResReportForClientDTO;
import com.example.demo.model.*;

import java.util.List;

public interface ReservationService {
    Reservation findById(Integer reservationId);

    Client findClientForReservation(Reservation reservation);

    Offer findOfferForReservation(Reservation reservation);

    boolean makeNewReportForClient(ResReportForClientDTO report, Client client, ServiceProvider svcProvider, Reservation reservation);

    boolean makeNewReservationByOwner(Offer offer, Client client, NewReservationDTO newReservation);

    ServiceProvider findOwnerOfOffer(Offer offer);

    List<ReservationReportForClient> getPenaltyRequestsByType(ReportForClientType type);

    ReservationReportForClient findReservationReportById(Integer penaltyReqId);

    void removeReservationReport(ReservationReportForClient rrfc);
}
