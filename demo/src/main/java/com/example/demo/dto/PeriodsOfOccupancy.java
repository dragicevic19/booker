package com.example.demo.dto;

import com.example.demo.model.Discount;
import com.example.demo.model.Period;
import com.example.demo.model.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PeriodsOfOccupancy {

    private List<DiscountDTO> discounts;

    public PeriodsOfOccupancy(List<Reservation> reservations, List<Discount> dis, List<Period> periodsOfOccupancy) {
        discounts = new ArrayList<>();
        for(Discount discount : dis) {
            discounts.add(new DiscountDTO(discount));
        }
        // ovako i za ostale liste
    }
//    private List<ReservationDTO> reservations;
//    private List<ReservedDiscountDTO> reservedDiscounts;
//    private List<UnavailablePeriodDTO> unavailablePeriods;
}
