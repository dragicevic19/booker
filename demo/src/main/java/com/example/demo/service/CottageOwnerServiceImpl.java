package com.example.demo.service;

import com.example.demo.dto.CottageRequest;
import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.CottageOwnerRepository;
import com.example.demo.repository.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CottageOwnerServiceImpl implements CottageOwnerService {

    @Autowired
    private CottageOwnerRepository cottageOwnerRepository;
    @Autowired
    private CottageRepository cottageRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleService roleService;

    @Override
    public CottageOwner findById(Integer id) {
        return cottageOwnerRepository.findById(id).orElseGet(null);
    }

    @Override
    public CottageOwner findByEmail(String email) {
        return cottageOwnerRepository.findByEmail(email);
    }

    @Override
    public List<CottageOwner> findAll() {
        return cottageOwnerRepository.findAll();
    }

    @Override
    public CottageOwner save(User user) {

        CottageOwner c = new CottageOwner(user);
        c.setRating(new Rating());
        c.setLoyaltyProgram(new LoyaltyProgram());
        c.setOffers(new ArrayList<>());
        List<Role> roles = roleService.findByName("ROLE_COTTAGE_OWNER");
        c.setRoles(roles);

        return this.cottageOwnerRepository.save(c);
    }

    @Override
    public Cottage addCottage(CottageRequest cottageRequest, CottageOwner c) {
        Cottage cottage = new Cottage();
        cottage.setName(cottageRequest.getCottageName());
        Address a = new Address();
        a.setStreet(cottageRequest.getStreet());
        a.setCountry(cottageRequest.getCountry());
        a.setCity(cottageRequest.getCity());
        cottage.setAddress(a);
        cottage.setDailyPrice(cottageRequest.getPrice());
        cottage.setCapacity(cottageRequest.getCapacity());
        cottage.setDeleted(false);
        cottage.setDescription(cottageRequest.getDescription());
        cottage.setCancellationFee(cottageRequest.getFee());
        cottage.setRating(new Rating());
        cottage.setNumOfRooms(cottageRequest.getNumOfRooms());
        cottage.setRegulations(cottageRequest.getRegulations());
        cottage.setPeriodsOfOccupancy(new ArrayList<Period>());
        cottage.setDiscounts(new ArrayList<>());
        cottage.setImages(cottageRequest.getImages());
        cottage.setReservations(new ArrayList<>());

        c.getOffers().add(cottage);

        return this.cottageRepository.save(cottage);

    }
}
