package com.example.demo.service;

import com.example.demo.dto.ComplaintResponseDTO;
import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.dto.PenaltyRequestResponseDTO;
import com.example.demo.dto.RatingRequestResponse;
import com.example.demo.model.Client;
import com.example.demo.model.Offer;
import com.example.demo.model.Reservation;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;


@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    private JavaMailSender javaMailSender;
    /*
     * Koriscenje klase za ocitavanje vrednosti iz application.properties fajla
     */
    @Autowired
    private Environment env;

    @Async
    public void sendmailRegistration(User user, boolean accepted, String explanation) throws IOException, MessagingException {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(env.getProperty("spring.mail.username"));
        mail.setSubject("User registration feedback");
        System.out.println("Email poslat!");

        if (!accepted)
        {
            mail.setText("Your account has not been accepted! \nExplanation: " + explanation);
        }
        else
        {
            mail.setText("Congratulations! Your account has been accepted!");
        }
        javaMailSender.send(mail);
    }

    @Override
    @Async
    public void sendEmailToSubscribedClients(Offer offer, NewDiscountDTO newDiscount) {

        SimpleMailMessage mail = new SimpleMailMessage();
        for(Client client : offer.getSubscribedClients()){
            mail.setTo(client.getEmail());
            mail.setFrom(env.getProperty("spring.mail.username"));
            mail.setSubject("New discount for offer: " + offer.getName());
            mail.setText("An offer you are subscribed to gets new discount!\nFrom: " + newDiscount.getStartDate().toString() +
                    " to: " + newDiscount.getEndDate().toString() + " for only " +  "$" + newDiscount.getPrice() +
                    "\n\nVisit link to see more: http://localhost:3000/cottages/" + offer.getId());
            javaMailSender.send(mail);
        }
    }
    @Async
    @Override
    public void sendmailDeletion(User user, boolean accepted, String requestText) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(env.getProperty("spring.mail.username"));
        mail.setSubject("User deletion feedback");
        System.out.println("Email poslat!");

        if (!accepted)
        {
            mail.setText("Your deletion request has not been accepted! \nExplanation: " + requestText);
        }
        else
        {
            mail.setText("Your deletion request is accepted! The account has been deleted. \nComment: " + requestText);
        }
        javaMailSender.send(mail);
    }
    @Async
    @Override
    public void sendComplaintResponse(ComplaintResponseDTO complaintResponseDTO) {
        SimpleMailMessage mailToClient = new SimpleMailMessage();
        SimpleMailMessage mailToProvider = new SimpleMailMessage();

        mailToClient.setTo(complaintResponseDTO.getClientEmail());
        mailToProvider.setTo(complaintResponseDTO.getProviderEmail());
        mailToClient.setFrom(env.getProperty("spring.mail.username"));
        mailToClient.setSubject("User complaint feedback");
        mailToProvider.setSubject("User complaint feedback");

        System.out.println("Email poslat!");
        mailToClient.setText("Your complaint for offer (" + complaintResponseDTO.getOfferName() + "): \n" + complaintResponseDTO.getOfferComplaint() + "\n\nYour complaint for service provider (" + complaintResponseDTO.getProviderEmail() + "): \n"
                + complaintResponseDTO.getProviderComplaint() + "\n\nAdministrator's repsonse: \n" + complaintResponseDTO.getAdminResponse());
        mailToProvider.setText("Client complaint for your offer (" + complaintResponseDTO.getOfferName() + "): \n" + complaintResponseDTO.getOfferComplaint() + "\n\nClient complaint for you: \n"
                + complaintResponseDTO.getProviderComplaint() + "\n\nAdministrator's response: \n" + complaintResponseDTO.getAdminResponse());
        javaMailSender.send(mailToClient);
        javaMailSender.send(mailToProvider);

    }
    @Async
    @Override
    public void sendReservationConfirmationToClient(Client client, Offer offer, Reservation reservation) {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(client.getEmail());
        mail.setFrom(env.getProperty("spring.mail.username"));
        mail.setSubject("New reservation for you! Enjoy in " + offer.getName());
        mail.setText("You have new reserved offer!\nFrom: " + reservation.getReservationPeriod().getDateFrom().toString() +
                " to: " + reservation.getReservationPeriod().getDateTo().toString() + "\nPrice: $" + reservation.getPrice() +
                "\n\nVisit link to see more: http://localhost:3000/cottages/" + offer.getId());
        javaMailSender.send(mail);
    }

    @Override
    public void sendPenaltyRequestEmail(PenaltyRequestResponseDTO penaltyRequestResponseDTO, boolean accepted) {
        SimpleMailMessage mailToClient = new SimpleMailMessage();
        SimpleMailMessage mailToProvider = new SimpleMailMessage();

        mailToClient.setTo(penaltyRequestResponseDTO.getClientEmail());
        mailToProvider.setTo(penaltyRequestResponseDTO.getProviderEmail());
        mailToClient.setFrom(env.getProperty("spring.mail.username"));
        mailToClient.setSubject("User penalty request feedback");
        mailToProvider.setSubject("User penalty request feedback");

        System.out.println("Email poslat!");

        if(accepted)
        {
            mailToClient.setText("Administrator has accepted the request of provider " + penaltyRequestResponseDTO.getProviderFirstName() +
                    " " + penaltyRequestResponseDTO.getProviderLastName() + " (" + penaltyRequestResponseDTO.getProviderEmail() + ") for " +
                    "you to receive 1 penalty for your behaviour while attending the offer called " + penaltyRequestResponseDTO.getOfferName() +
                    ".\n\nProvider's comment on your behaviour:\n" + penaltyRequestResponseDTO.getComment() + "\n\nYou are sanctioned with 1 penalty!");

            mailToProvider.setText("Administrator has accepted your request for client " + penaltyRequestResponseDTO.getClientFirstName() +
                    " " + penaltyRequestResponseDTO.getClientLastName() + " (" + penaltyRequestResponseDTO.getClientEmail() + ") to receive" +
                    " 1 penalty for his/her behaviour while attending the offer called " + penaltyRequestResponseDTO.getOfferName() +
                    ".\n\nYour comment on client's behaviour:\n" + penaltyRequestResponseDTO.getComment() + "\n\nThe client is sanctioned with 1 penalty!");
        }
        else
        {
            mailToClient.setText("Administrator has rejected the request of provider " + penaltyRequestResponseDTO.getProviderFirstName() +
                    " " + penaltyRequestResponseDTO.getProviderLastName() + " (" + penaltyRequestResponseDTO.getProviderEmail() + ") for " +
                    "you to receive 1 penalty for your behaviour while attending the offer called " + penaltyRequestResponseDTO.getOfferName() +
                    ".\n\nProvider's comment on your behaviour:\n" + penaltyRequestResponseDTO.getComment() + "\n\nYou are not sanctioned!");

            mailToProvider.setText("Administrator has rejected your request for client " + penaltyRequestResponseDTO.getClientFirstName() +
                    " " + penaltyRequestResponseDTO.getClientLastName() + " (" + penaltyRequestResponseDTO.getClientEmail() + ") to receive" +
                    " 1 penalty for his/her behaviour while attending the offer called " + penaltyRequestResponseDTO.getOfferName() +
                    ".\n\nYour comment on client's behaviour:\n" + penaltyRequestResponseDTO.getComment() + "\n\nThe client is not sanctioned!");
        }

        javaMailSender.send(mailToClient);
        javaMailSender.send(mailToProvider);
    }

    @Override
    public void sendRatingRequestResponse(RatingRequestResponse ratingRequestResponse, boolean accepted) {
        SimpleMailMessage mailToProvider = new SimpleMailMessage();
        mailToProvider.setTo(ratingRequestResponse.getProviderEmail());
        mailToProvider.setFrom(env.getProperty("spring.mail.username"));
        mailToProvider.setSubject("Rating Request Feedback");

        if(accepted)
        {
            mailToProvider.setText("Administrator has accepted comment from our client " + ratingRequestResponse.getClientEmail()
            + "while rating your offer " + ratingRequestResponse.getOfferName() + ".\n\nClient's rating: " +
                    ratingRequestResponse.getRatingValue() + "\n\nClient's comment: " + ratingRequestResponse.getComment());
        }
        else
        {
            mailToProvider.setText("Administrator has rejected comment from our client " + ratingRequestResponse.getClientEmail()
                    + "while rating your offer " + ratingRequestResponse.getOfferName() + ".\n\nClient's rating: " +
                    ratingRequestResponse.getRatingValue() + "\n\nClient's comment: " + ratingRequestResponse.getComment());
        }
        javaMailSender.send(mailToProvider);
    }
}
