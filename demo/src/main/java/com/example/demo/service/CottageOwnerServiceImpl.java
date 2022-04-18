package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.CottageOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CottageOwnerServiceImpl implements CottageOwnerService {

    @Autowired
    private CottageOwnerRepository cottageOwnerRepository;

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

        CottageOwner c = (CottageOwner) user;

        LoyaltyProgram l = new LoyaltyProgram();
        l.setPoints(0);
        l.setRank(LoyaltyRank.REGULAR);
        c.setLoyaltyProgram(new LoyaltyProgram());
        c.setCottages(new ArrayList<>());
        List<Role> roles = roleService.findByName("ROLE_COTTAGE_OWNER");
        c.setRoles(roles);

        return this.cottageOwnerRepository.save(c);
    }
}
