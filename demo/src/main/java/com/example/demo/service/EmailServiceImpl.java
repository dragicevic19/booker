package com.example.demo.service;

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
    public void sendmail(User user, boolean accepted, String explanation) throws IOException, MessagingException {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {

                return new PasswordAuthentication(user.getEmail(), "nezanimate22"); //sifra gmail naloga koji se koristi za testiranje ove funkcionalnosti
            }
        });
        Message msg = new MimeMessage(session);
        MimeBodyPart messageBodyPart = new MimeBodyPart();
        msg.setFrom(new InternetAddress(user.getEmail(), false));
        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(user.getEmail()));
        msg.setSubject("User registration feedback");
        msg.setContent("Tutorials point email", "text/html");
        msg.setSentDate(new Date());

        if (!accepted)
        {
            messageBodyPart.setContent("Your account has not been accepted!", "text/html");
            messageBodyPart.setContent("Explanation: " + explanation, "text/html");
        }
        else
        {
            messageBodyPart.setContent("Congratulations! Your account has been accepted!", "text/html");
        }
        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);

        msg.setContent(multipart);
        Transport.send(msg);
    }
}
