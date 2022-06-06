package com.example.demo.service;

import com.example.demo.dto.CottageRequest;
import com.example.demo.model.Address;
import com.example.demo.model.Cottage;
import com.example.demo.repository.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CottageServiceImpl implements CottageService{

    @Autowired
    CottageRepository cottageRepository;

    @Override
    public Cottage findById(Integer id) {
        return cottageRepository.findById(id).orElse(null);
    }

    @Override
    public Integer countCottagesByCity(String c) {
        return cottageRepository.findByAddressCityIgnoreCase(c).size();
    }

    @Override
    public List<Cottage> findAll() {
        return cottageRepository.findAll();
    }

    @Override
    public Cottage editCottage(Cottage cottage, CottageRequest cottageRequest) {
        cottage.setName(cottageRequest.getCottageName());
        Address a = new Address();
        a.setStreet(cottageRequest.getStreet());
        a.setCountry(cottageRequest.getCountry());
        a.setCity(cottageRequest.getCity());
        cottage.setAddress(a);
        cottage.setPrice(cottageRequest.getPrice());
        cottage.setCapacity(cottageRequest.getCapacity());
        cottage.setDescription(cottageRequest.getDescription());
        cottage.setCancellationFee(cottageRequest.getFee());
        cottage.setNumOfRooms(cottageRequest.getNumOfRooms());
        cottage.setRegulations(cottageRequest.getRegulations());
        cottage.setImages(cottageRequest.getPhotos());
        cottage.setAdditionalServices(cottageRequest.getAdditionalServices());

        return this.cottageRepository.save(cottage);
    }
    public List<Cottage> fourOffers() {
        return cottageRepository.getAllByOrderByRating();
    }

    @Override
    public void deleteCottage(Cottage cottage) {
        cottage.setDeleted(true);
        cottageRepository.save(cottage);
    }

}
