package com.example.demo.service;

import com.example.demo.dto.BoatRequest;
import com.example.demo.dto.FishingLessonRequest;
import com.example.demo.model.Address;
import com.example.demo.model.Boat;
import com.example.demo.model.BoatType;
import com.example.demo.model.FishingLesson;
import com.example.demo.repository.BoatRepository;
import com.example.demo.repository.FishingLessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BoatServiceImpl implements BoatService{

    @Autowired
    BoatRepository boatRepository;


    @Override
    public Boat findById(Integer id) {
        return boatRepository.findById(id).orElseGet(null);
    }

    @Override
    public List<Boat> findAll() {
        return boatRepository.findAll();
    }

    @Override
    public void deleteBoat(Boat boat) {
        boat.setDeleted(true);
        boatRepository.save(boat);
    }

    @Override
    public Boat editBoat(Boat boat, BoatRequest boatRequest) {
        boat.setName(boatRequest.getName());
        Address a = new Address();
        a.setStreet(boatRequest.getStreet());
        a.setCountry(boatRequest.getCountry());
        a.setCity(boatRequest.getCity());
        boat.setAddress(a);
        boat.setPrice(boatRequest.getPrice());
        boat.setCapacity(boatRequest.getCapacity());
        boat.setDescription(boatRequest.getDescription());
        boat.setCancellationFee(boatRequest.getFee());
        boat.setRegulations(boatRequest.getRegulations());
        boat.setImages(boatRequest.getPhotos());
        boat.setAdditionalServices(boatRequest.getAdditionalServices());
        boat.setEngineNum(boatRequest.getEngineNum());
        boat.setEnginePow(boatRequest.getEnginePow());
        boat.setFishingEquipment(boatRequest.getFishingGear());
        boat.setLength(boatRequest.getLength());
        boat.setMaxSpeed(boatRequest.getMaxSpeed());
        boat.setNavEquipment(boatRequest.getNavGear());

        return this.boatRepository.save(boat);
    }
}
