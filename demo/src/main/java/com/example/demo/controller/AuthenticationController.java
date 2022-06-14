package com.example.demo.controller;

import com.example.demo.dto.CottageDTO;
import com.example.demo.dto.JwtAuthenticationRequest;
import com.example.demo.dto.UserRequest;
import com.example.demo.dto.UserTokenState;
import com.example.demo.model.Cottage;
import com.example.demo.model.User;
import com.example.demo.service.CottageService;
import com.example.demo.service.UserService;
import com.example.demo.util.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {
    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    CottageService cottageService;


    @PostMapping("/login")
    public ResponseEntity<UserTokenState> createAuthenticationToken(
            @RequestBody JwtAuthenticationRequest authenticationRequest, HttpServletResponse response) {

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(), authenticationRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = (User) authentication.getPrincipal();
            String jwt = tokenUtils.generateToken(user.getUsername());
            int expiresIn = tokenUtils.getExpiredIn();

            return ResponseEntity.ok(new UserTokenState(jwt, expiresIn, user));
        }
        catch(BadCredentialsException e){
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // Endpoint za registraciju novog korisnika
    @PostMapping("/signup")
    public ResponseEntity<User> addUser(@RequestBody UserRequest userRequest, UriComponentsBuilder ucBuilder) {
        userRequest.setEmail(userRequest.getEmail().toLowerCase(Locale.ROOT));
        User existUser = this.userService.findByEmail(userRequest.getEmail());

        if (existUser != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
//            throw new ResourceConflictException("Email already exists");
        }

        User user = this.userService.save(userRequest);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("cottages/countByCity")
    public ResponseEntity<java.util.List<Integer>> countCottagesByCity(@RequestParam String[] cities){
        List<Integer> retList = new ArrayList<>();
        for (String c : cities) {
            retList.add(cottageService.countCottagesByCity(c));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @GetMapping("cottages/4offers")
    public ResponseEntity<List<Cottage>> fourOffers(){
        List<Cottage> cotlist = cottageService.fourOffers();
        List<Cottage> retList = new ArrayList<>();
        for (int i = 0; i < 4 && i < cotlist.size(); i++) {
            retList.add(cotlist.get(i));
        }

        return new ResponseEntity<>(retList, HttpStatus.OK);
    }

    @GetMapping("cottages")
    public ResponseEntity<List<Cottage>> getOffers(){
        List<Cottage> cotlist = cottageService.findAll();
        return new ResponseEntity<>(cotlist, HttpStatus.OK);
    }

    @GetMapping("cottage/{cottageId}")
    public ResponseEntity<CottageDTO> loadCottage(@PathVariable Integer cottageId) {

        Cottage cottage = cottageService.findById(cottageId);
        if (cottage == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new CottageDTO(cottage), HttpStatus.OK);
    }

    @PostMapping("create-deletion-request/{userId}")
    public ResponseEntity<Boolean> createDeletionRequest(@PathVariable Integer userId, @RequestParam("request_text") String requestText) {

        User user = userService.findById(userId);
        userService.createDeletionRequest(user, requestText);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
