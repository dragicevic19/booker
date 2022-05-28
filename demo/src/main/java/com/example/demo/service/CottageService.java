package com.example.demo.service;

import com.example.demo.dto.CottageRequest;
import com.example.demo.model.Cottage;

public interface CottageService {

    public Cottage findById(Integer id);
    public Integer countCottagesByCity(String c);

    Cottage editCottage(Cottage cottage, CottageRequest cottageRequest);
}
