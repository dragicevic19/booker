package com.example.demo.service;

import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.model.Discount;
import com.example.demo.model.Offer;
import com.example.demo.model.Period;
import com.example.demo.repository.DiscountRepository;
import com.example.demo.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
