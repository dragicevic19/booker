package com.example.demo.service;

import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.dto.PeriodDTO;
import com.example.demo.model.Discount;
import com.example.demo.model.Offer;
import com.example.demo.model.Period;
import com.example.demo.model.Reservation;
import com.example.demo.repository.DiscountRepository;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class OfferServiceImpl implements OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public Offer findById(Integer id) {
        return offerRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteOffer(Offer offer) {
        offer.setDeleted(true);
        offerRepository.save(offer);
    }

    @Override
    public Offer addDiscountToOffer(Offer offer, NewDiscountDTO newDiscount) {
        if (!isPeriodAvailable(newDiscount.getStartDate(), newDiscount.getEndDate(), offer))
            return null;

        Discount discount = new Discount();

        Period period = new Period();
        period.setDateFrom(newDiscount.getStartDate());
        period.setDateTo(newDiscount.getEndDate());
        discount.setPeriod(period);

        discount.setPrice(newDiscount.getPrice());
        discount.setActive(true);

        offer.getDiscounts().add(discount);
        discountRepository.save(discount);

        return offer;
    }

    @Override
    public Offer addUnavailablePeriod(Offer offer, PeriodDTO newPeriod) {
        if (!isPeriodAvailable(newPeriod.getStartDate(), newPeriod.getEndDate(), offer))
            return null;

        Period unavailablePeriod = new Period();
        unavailablePeriod.setDateFrom(newPeriod.getStartDate());
        unavailablePeriod.setDateTo(newPeriod.getEndDate());

        offer.getPeriodsOfOccupancy().add(unavailablePeriod);
        offerRepository.save(offer);

        return offer;
    }

    @Override
    public Offer findOfferForReservation(Reservation r) {
        for(Offer offer: offerRepository.findAll()){
            for(Reservation res : offer.getReservations()){
                if (res.getId() == r.getId())
                    return offer;
            }
        }
        return null;
    }

    private boolean isPeriodAvailable(LocalDate startDate, LocalDate endDate, Offer offer) {

        for(Period period : offer.getPeriodsOfOccupancy()){
            if (checkPeriod(period, startDate, endDate))
                return false;
        }

        for(Reservation res : offer.getReservations()){
            Period period = res.getReservationPeriod();
            if (checkPeriod(period, startDate, endDate))
                return false;
        }

        for(Discount dis : offer.getDiscounts()){
            Period period = dis.getPeriod();
            if (checkPeriod(period, startDate, endDate))
                return false;
        }
        return true;
    }

    private boolean checkPeriod(Period period, LocalDate startDate, LocalDate endDate){

        if ((startDate.isAfter(period.getDateFrom()) || startDate.isEqual(period.getDateFrom())) && startDate.isBefore(period.getDateTo()))
            return true;
        if (endDate.isAfter(period.getDateFrom())  && endDate.isBefore(period.getDateTo()))
            return true;
        if (startDate.isBefore(period.getDateFrom()) && endDate.isAfter(period.getDateTo()))
            return true;

        return false;
    }
}
