package com.example.demo.controller;

import com.example.demo.dto.*;
import com.example.demo.model.*;
import com.example.demo.service.ComplaintService;
import com.example.demo.service.EmailService;
import com.example.demo.service.ReservationService;
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
import java.util.List;

// Primer kontrolera cijim metodama mogu pristupiti samo autorizovani korisnici
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ComplaintService complaintService;

    @Autowired
    private ReservationService reservationService;

    // Za pristup ovoj metodi neophodno je da ulogovani korisnik ima ADMIN ulogu
    // Ukoliko nema, server ce vratiti gresku 403 Forbidden
    // Korisnik jeste autentifikovan, ali nije autorizovan da pristupi resursu
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public User loadById(@PathVariable Integer userId) {
        return this.userService.findById(userId);
    }

    @GetMapping("/user/all")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public List<User> loadAll() {
        return this.userService.findAll();
    }

    @GetMapping("/whoami")
    @PreAuthorize("hasRole('CLIENT')")
    public ClientDTO user(Principal user) {
        return new ClientDTO((Client) this.userService.findByEmail(user.getName()));
    }

    @GetMapping("/user/requests")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<UserDataTable>> userRequests(@RequestParam("enabled") boolean enabled, @RequestParam("user_type") String userType) {
        List<User> users = this.userService.findDisabledUsers(enabled);
        List<UserDataTable> userDataTableDTO = new ArrayList<>();

        if(userType.equals("ROLE_SUPER_ADMIN")) {
            for(User user : users)
            {
                userDataTableDTO.add(new UserDataTable(user));
            }
        }

        else{
            for(User user : users)
            {
                if(!user.getRoles().get(0).getName().equals("ROLE_ADMIN"))
                    userDataTableDTO.add(new UserDataTable(user));
            }
        }

        return new ResponseEntity<>(userDataTableDTO, HttpStatus.OK);
    }

    @RequestMapping("/user/enable/{userId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<User> enableUserAcc(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        User user = this.userService.enableUser(userToBeFound);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping("/user/reject-request/{userId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<User> rejectRequest(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        User user = this.userService.rejectRequest(userToBeFound);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping("/user/accept-deletion/{userId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<User> acceptDeletion(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        this.userService.acceptDeletionRequest(userToBeFound);
        return new ResponseEntity<>(userToBeFound, HttpStatus.OK);
    }

    @RequestMapping("/user/reject-deletion/{userId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<User> rejectDeletion(@PathVariable Integer userId)
    {
        User userToBeFound = loadById(userId);
        this.userService.rejectDeletionRequest(userToBeFound);
        return new ResponseEntity<>(userToBeFound, HttpStatus.OK);
    }

    @PostMapping("/send-email-registration")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public String sendEmailRegistration(@RequestBody(required = false) RegRequestResponseDTO regReqRes) throws InterruptedException, MessagingException, IOException {

        User user = userService.findById(regReqRes.getId());
        emailService.sendmailRegistration(user, regReqRes.isAccepted(), regReqRes.getExplanation());

        return "success";
    }

    @PostMapping("/send-email-deletion")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public String sendEmailDeletion(@RequestBody(required = false) DeleteRequestResponseDTO deleteRegRes) throws InterruptedException, MessagingException, IOException {

        User user = userService.findById(deleteRegRes.getId());
        emailService.sendmailDeletion(user, deleteRegRes.isAccepted(), deleteRegRes.getRequestText());

        return "success";
    }

    @GetMapping("/user/deletion-requests")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public ResponseEntity<List<DeleteUserDataTable>> deletionRequests(@RequestParam("active") boolean active) {
        List<User> users = this.userService.findDeleteRequestUsers(active);
        List<DeleteUserDataTable> deleteUserDataTableDTO = new ArrayList<>();
        for(User user : users)
        {
            deleteUserDataTableDTO.add(new DeleteUserDataTable(user));
        }

        return new ResponseEntity<>(deleteUserDataTableDTO, HttpStatus.OK);
    }

    @PostMapping("create-deletion-request/{userId}")
    public ResponseEntity<Boolean> createDeletionRequest(@PathVariable Integer userId, @RequestParam("request_text") String requestText) {

        User user = userService.findById(userId);
        userService.createDeletionRequest(user, requestText);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("/send-email-complaint")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public String sendEmailComplaint(@RequestBody(required = false) ComplaintResponseDTO complaintResponseDTO) throws InterruptedException, MessagingException, IOException {
        emailService.sendComplaintResponse(complaintResponseDTO);
        return "success";
    }

    @DeleteMapping("/delete-complaint/{complaintId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public void deleteComplaint(@PathVariable Integer complaintId) throws InterruptedException, MessagingException, IOException {
        Complaint complaint = complaintService.findById(complaintId);
        userService.removeComplaint(complaint);
    }

    @PostMapping("/penalty-req-response")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public String sendEmailPenaltyRequest(@RequestBody(required = false) ReportForReview reportForReview, @RequestParam("accepted") boolean accepted) throws InterruptedException, MessagingException, IOException {
        ServiceProvider provider = (ServiceProvider)userService.findById(reportForReview.getProviderId());
        Client client = (Client)userService.findById(reportForReview.getClientId());
        PenaltyRequestResponseDTO penaltyRequestResponseDTO = new PenaltyRequestResponseDTO(reportForReview, provider);

        if(accepted)
            userService.givePenaltyPoints(client, 1);

        emailService.sendPenaltyRequestEmail(penaltyRequestResponseDTO, accepted);
        return "success";
    }

    @DeleteMapping("/delete-penalty-req/{penaltyReqId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
    public void deletePenaltyRequest(@PathVariable Integer penaltyReqId) throws InterruptedException, MessagingException, IOException {
        ReservationReportForClient rrfc = reservationService.findReservationReportById(penaltyReqId);
        reservationService.removeReservationReport(rrfc);
    }
}