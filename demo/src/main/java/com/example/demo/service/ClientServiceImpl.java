package com.example.demo.service;

import com.example.demo.model.*;
import com.example.demo.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleService roleService;


    @Override
    public Client findById(Integer id) {
        return clientRepository.findById(id).orElseGet(null);
    }

    @Override
    public Client findByEmail(String email) {
        return clientRepository.findByEmail(email);
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Client save(User user) {
        Client c = new Client(user);
        c.setRating(new Rating());
        c.setLoyaltyProgram(new LoyaltyProgram());
        c.setReservations(new ArrayList<>());
        List<Role> roles = roleService.findByName("ROLE_CLIENT");
        c.setRoles(roles);
        c.setNumOfPenalties(0);
        c.setEnabled(false);

        return this.clientRepository.save(c);
    }

    @Override
    public User updateUser(User user) {
        return null;    //TODO
    }
}
