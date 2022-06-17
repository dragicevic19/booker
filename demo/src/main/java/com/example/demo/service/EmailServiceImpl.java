package com.example.demo.service;

import com.example.demo.dto.NewDiscountDTO;
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
}
