package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.OfferRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private BoatOwnerService boatOwnerService;
    @Autowired
    private CottageOwnerService cottageOwnerService;
    @Autowired
    private ClientService clientService;
    @Autowired
    private FishingInstructorService fishingInstructorService;

    @Autowired
    private OfferRepository offerRepository;



//    @Autowired
//    private PropertyOwnerRepository propOwnerRepo;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<Offer> findUsersOffers(ServiceProvider owner) {
        return owner.getOffers();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with email '%s'.", email));
        } else {
            return user;
        }
    }

    public User findById(Integer id) throws AccessDeniedException {
        return userRepository.findById(id).orElseGet(null);
    }

    public List<User> findAll() throws AccessDeniedException {
        return userRepository.findAll();
    }

    public User save(UserRequest userRequest) {
        User u = new User();
        u.setEmail(userRequest.getEmail());

        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        u.setFirstName(userRequest.getFirstName());
        u.setLastName(userRequest.getLastName());
        u.setPhoneNumber(userRequest.getPhoneNumber());
        Address a = new Address();
        a.setStreet(userRequest.getStreet());
        a.setCity(userRequest.getCity());
        a.setCountry(userRequest.getCountry());
        u.setAddress(a);
        u.setDeleted(false);
        u.setLastPasswordResetDate(Timestamp.valueOf(LocalDateTime.now()));

        // TODO: refaktorisati sa nekim nasledjivanjem mozda?
        switch (userRequest.getType()) {
            case "boat_owners":
                return boatOwnerService.save(u);
            case "cottage_owners":
                return cottageOwnerService.save(u);
            case "clients":
                return clientService.save(u);
            case "instructors":
                return fishingInstructorService.save(u);
            default:
                return null;
        }
    }
}
