package com.example.demo.service;

import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.dto.PeriodDTO;
import com.example.demo.model.Offer;
import com.example.demo.model.Period;

public interface OfferService {

    Offer findById(Integer id);

    void deleteOffer(Offer offer);

    Offer addDiscountToOffer(Offer offer, NewDiscountDTO newDiscount);

    Offer addUnavailablePeriod(Offer offer, PeriodDTO newPeriod);
}
