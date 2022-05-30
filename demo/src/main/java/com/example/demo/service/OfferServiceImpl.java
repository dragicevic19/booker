package com.example.demo.service;

import com.example.demo.model.Offer;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfferServiceImpl implements OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Override
    public Offer findById(Integer id) {
        return offerRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteOffer(Offer offer) {
        offer.setDeleted(true);
        offerRepository.save(offer);
    }
}
