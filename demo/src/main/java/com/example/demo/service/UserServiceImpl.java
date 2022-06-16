package com.example.demo.service;

import com.example.demo.dto.UserRequest;
import com.example.demo.model.*;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.OfferRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClientRepository clientRepository;

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
    private AdministratorService administratorService;

    @Autowired
    private OfferRepository offerRepository;


    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<Offer> findUsersOffers(ServiceProvider owner) {
        return owner.getOffers();
    }

    @Override
    public List<User> findDisabledUsers(boolean enabled) {
        return userRepository.findByEnabled(enabled);
    }

    @Override
    public User enableUser(User user) {
        user.setEnabled(true);
        return this.userRepository.save(user);
    }

    @Override
    public User rejectRequest(User user) {
        user.setDeleted(true);
        return this.userRepository.save(user);
    }

    @Override
    public void deleteUser(User serviceProvider) {
        serviceProvider.setDeleted(true);
        userRepository.save(serviceProvider);
    }

    @Override
    public void createDeletionRequest(User user, String requestText) {
        user.setDeletionRequest(new DeletionRequest(user.getId(), requestText));
        userRepository.save(user);
    }

    @Override
    public List<User> findDeleteRequestUsers(boolean active) {
        return userRepository.findByDeletionRequestActive(active);
    }

    @Override
    public void acceptDeletionRequest(User userToBeFound) {
        userToBeFound.setDeleted(true);
        userToBeFound.getDeletionRequest().setActive(false);
        userToBeFound.getDeletionRequest().setRequestText("");
        this.userRepository.save(userToBeFound);
    }

    @Override
    public void rejectDeletionRequest(User userToBeFound) {
        userToBeFound.getDeletionRequest().setActive(false);
        userToBeFound.getDeletionRequest().setRequestText("");
        this.userRepository.save(userToBeFound);
    }

    @Override
    public boolean isProviderReserved(ServiceProvider serviceProvider) {

        boolean isReserved = false;

        for(Offer offer : serviceProvider.getOffers())
        {
            for (Reservation reservation : offer.getReservations())
            {
                if (reservation.getReservationPeriod().getDateTo().isAfter(LocalDate.now())){
                    isReserved = true;
                }
            }
        }
        return isReserved;
    }

    @Override
    public List<Reservation> findUsersReservations(ServiceProvider serviceProvider) {
        List<Reservation> reservations = new ArrayList<>();

        for(Offer offer : serviceProvider.getOffers()){
            for(Reservation res : offer.getReservations()){
                reservations.add(res);
            }
        }
        return reservations;
    }

    @Override
    public List<Reservation> getReservationHistory(List<Reservation> usersReservations) {
        List<Reservation> retList = new ArrayList<>();

        for(Reservation reservation : usersReservations){
            if (reservation.getReservationPeriod().getDateFrom().isBefore(LocalDate.now())) // ovde se smestaju i trenutne rez
                retList.add(reservation);
        }
        return retList;
    }

    @Override
    public List<Reservation> getFutureReservations(List<Reservation> usersReservations) {
        List<Reservation> retList = new ArrayList<>();

        for(Reservation reservation : usersReservations){
            if (reservation.getReservationPeriod().getDateTo().isAfter(LocalDate.now()))  // i ovde su i trenutne rez
                retList.add(reservation);
        }
        return retList;
    }

    @Override
    public Client findClientForReservation(Reservation r) {
        for(Client client : clientRepository.findAll()){
            for(Reservation res : client.getReservations()){
                if (res.getId() == r.getId()) return client;
            }
        }
        return null;
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
            case "administrators":
                return administratorService.save(u);
            default:
                return null;
        }
    }
}
