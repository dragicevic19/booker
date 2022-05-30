package com.example.demo.service;

import com.example.demo.model.Offer;

public interface OfferService {

    Offer findById(Integer id);

    void deleteOffer(Offer offer);
}
