package com.example.demo.controller;

import com.example.demo.dto.OfferToList;
import com.example.demo.dto.UserDataTable;
import com.example.demo.dto.UserRequest;
import com.example.demo.model.Property;
import com.example.demo.model.User;
import com.example.demo.service.EmailService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Primer kontrolera cijim metodama mogu pristupiti samo autorizovani korisnici
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    // Za pristup ovoj metodi neophodno je da ulogovani korisnik ima ADMIN ulogu
    // Ukoliko nema, server ce vratiti gresku 403 Forbidden
    // Korisnik jeste autentifikovan, ali nije autorizovan da pristupi resursu
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('ADMIN')")
    public User loadById(@PathVariable Integer userId) {
        return this.userService.findById(userId);
    }

    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> loadAll() {
        return this.userService.findAll();
    }

    @GetMapping("/whoami")
    @PreAuthorize("hasRole('USER')")
    public User user(Principal user) {
        return this.userService.findByEmail(user.getName());
    }

    @GetMapping("/user/requests")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UserDataTable>> userRequests(@RequestParam("enabled") boolean enabled) {
        List<User> users = this.userService.findDisabledUsers(enabled);
        List<UserDataTable> userDataTableDTO = new ArrayList<>();
        for(User user : users)
        {
            userDataTableDTO.add(new UserDataTable(user));
        }

        return new ResponseEntity<>(userDataTableDTO, HttpStatus.OK);
    }

    @RequestMapping("/user/enable/{userId}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> enableUserAcc(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        User user = this.userService.enableUser(userToBeFound);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping("/user/reject-request/{userId}")
    //@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> rejectRequest(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        User user = this.userService.rejectRequest(userToBeFound);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/send-email/async")
    public String sendemail(@RequestParam(name = "userId", required = true) String userId, @RequestParam(name = "accepted", required = true) boolean accepted, @RequestParam(name = "explanation", required = false) String explanation) throws InterruptedException, MessagingException, IOException {

        //slanje email-a
        Integer id = Integer.parseInt(userId);
        User user = userService.findById(id);
        emailService.sendmail(user, accepted, explanation);

        return "success";
    }
}