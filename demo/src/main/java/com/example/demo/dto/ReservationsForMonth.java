package com.example.demo.dto;

import com.example.demo.model.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationsForMonth {

    private Map<String, Integer> numOfReservations;

    public ReservationsForMonth(int month){

        numOfReservations = new HashMap<>();

        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                for(int i = 1; i < 32; i++) {
                    numOfReservations.put(String.valueOf(i) + ". " + String.valueOf(month) + ".", 0);
                }
                break;
            case 2:
                for(int i = 1; i < 29; i++) {
                    numOfReservations.put(String.valueOf(i) + ". " + String.valueOf(month) + ".", 0);
                }
                break;
            default:
                for(int i = 1; i < 31; i++) {
                    numOfReservations.put(String.valueOf(i) + ". " + String.valueOf(month) + ".", 0);
                }
                break;
        }
    }

}
