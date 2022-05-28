package com.example.demo.service;

import com.example.demo.model.User;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import java.io.IOException;

public interface EmailService {
    public void sendmail(User user, boolean accepted, String explanation) throws InterruptedException, MessagingException, IOException;
}
