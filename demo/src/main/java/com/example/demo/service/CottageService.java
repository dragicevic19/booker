package com.example.demo.service;

import com.example.demo.model.Cottage;

import java.util.List;

public interface CottageService {

    public Integer countCottagesByCity(String c);

    public List<Cottage> fourOffers();


}
