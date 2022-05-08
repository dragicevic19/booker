package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.BoatOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class BoatOwnerServiceImpl implements BoatOwnerService {

    @Autowired
    private BoatOwnerRepository boatOwnerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleService roleService;

    @Override
    public BoatOwner findById(Integer id) {
        return boatOwnerRepository.findById(id).orElseGet(null);
    }

    @Override
    public BoatOwner findByEmail(String email) throws UsernameNotFoundException {
        return boatOwnerRepository.findByEmail(email);
    }

    @Override
    public List<BoatOwner> findAll() {
        return boatOwnerRepository.findAll();
    }

    @Override
    public BoatOwner save(User user) {
        BoatOwner b = new BoatOwner(user);
        b.setRating(new Rating());
//        b.setOffers(new HashSet<>());
        //b.setEnabled(true); ovo ce administrator da omoguci
        b.setLoyaltyProgram(new LoyaltyProgram());

        List<Role> roles = roleService.findByName("ROLE_BOAT_OWNER");
        b.setRoles(roles);

        return this.boatOwnerRepository.save(b);
    }

//    @Override
//    public List<Boat> findAllMyBoats(BoatOwner u) {
//        return u.getBoats();
//    }
}
