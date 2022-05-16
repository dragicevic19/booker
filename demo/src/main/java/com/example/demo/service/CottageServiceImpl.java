package com.example.demo.service;

import com.example.demo.repository.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CottageServiceImpl implements CottageService{

    @Autowired
    CottageRepository cottageRepository;

    @Override
    public Integer countCottagesByCity(String c) {
        return cottageRepository.findByAddressCityIgnoreCase(c).size();
    }
}
