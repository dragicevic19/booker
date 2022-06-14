package com.example.demo.service;

import com.example.demo.dto.NewDiscountDTO;
import com.example.demo.model.Offer;
import com.example.demo.model.User;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import java.io.IOException;

public interface EmailService {
    void sendmailRegistration(User user, boolean accepted, String explanation) throws InterruptedException, MessagingException, IOException;

    void sendEmailToSubscribedClients(Offer offer, NewDiscountDTO newDiscount);

    void sendmailDeletion(User user, boolean accepted, String requestText);
}
