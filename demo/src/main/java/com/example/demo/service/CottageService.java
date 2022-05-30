package com.example.demo.service;

import com.example.demo.dto.CottageRequest;
import com.example.demo.model.Cottage;
import com.example.demo.model.Cottage;

import java.util.List;

public interface CottageService {

    public Cottage findById(Integer id);
    public Integer countCottagesByCity(String c);

    Cottage editCottage(Cottage cottage, CottageRequest cottageRequest);
    public List<Cottage> fourOffers();

}
