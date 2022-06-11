package com.example.demo.dto;

import com.example.demo.model.Discount;
import com.example.demo.model.Period;
import com.example.demo.model.Reservation;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PeriodsOfOccupancy {

    private List<DiscountDTO> discounts;
    private List<ReservationDTO> reservations;
    private List<UnavailablePeriodDTO> unavailablePeriods;

    public PeriodsOfOccupancy(List<Reservation> res, List<Discount> dis, List<Period> periodsOfOccupancy) {
        discounts = new ArrayList<>();
        for(Discount discount : dis) {
            discounts.add(new DiscountDTO(discount));
        }

        reservations = new ArrayList<>();
        for(Reservation r : res){
            reservations.add(new ReservationDTO(r));
        }

        unavailablePeriods = new ArrayList<>();
        for(Period period : periodsOfOccupancy){
            unavailablePeriods.add(new UnavailablePeriodDTO(period));
        }
    }

}
