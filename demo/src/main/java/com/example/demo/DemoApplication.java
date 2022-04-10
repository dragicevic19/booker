package com.example.demo;

import com.example.demo.model.*;
import com.example.demo.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private ServiceProviderRepository serviceProviderRepo;


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        makeTestDataBoatOwner();
        makeTestDataCottageOwner();
        makeTestDataInstructor();

    }

    private void makeTestDataInstructor() {
        ServiceProvider i = new FishingInstructor("misa@gmail.com", "misa123", "Misa", "Misic",
                new Address("Jevrejska 2", "Novi Sad", "Serbia"), "0632662362", "my biography");
        List<AdditionalService> additionalServices = new ArrayList<>();
        additionalServices.add(new AdditionalService("additional service for fishing adventure 1", 0, "desc of free additional service"));
        additionalServices.add(new AdditionalService("additional service for fishing adventure 1", 100, "desc of additional service"));
        additionalServices.add(new AdditionalService("additional service for fishing adventure 1", 5, "desc of additional service"));

        List<String> fishingEqu = new ArrayList<>();
        fishingEqu.add("stap");
        fishingEqu.add("mamac");
        fishingEqu.add("masinica");

        FishingLesson f = new FishingLesson("lesson1", "description of first fishing lesson",
                new Address("Jadranska 1", "Herceg Novi", "Crna Gora"), 2, "+18", 50, additionalServices, 100, fishingEqu);

        List<FishingLesson> lessons = new ArrayList<>();
        lessons.add(f);
        ((FishingInstructor) i).setFishingLessons(lessons);

        serviceProviderRepo.save(i);
    }

    private void makeTestDataCottageOwner() {
        ServiceProvider co = new CottageOwner("djura@gmail.com", "test", "Djura", "Djuric",
                new Address("Vuka Karadzica 1", "Novi Sad", "Serbia"), "0615211267");
        List<AdditionalService> additionalServices = new ArrayList<>();
        additionalServices.add(new AdditionalService("additional service for cottage 1", 0, "desc of free additional service"));
        additionalServices.add(new AdditionalService("additional service for cottage 1", 33, "desc of additional service"));
        additionalServices.add(new AdditionalService("additional service for cottage 1", 21, "desc of additional service"));

        Cottage c = new Cottage("vikendica1", "opis prve vikendice",
                new Address("Jadranska 22", "Herceg Novi", "Crna Gora"), 5, "no regulations", 40, additionalServices, 50);

        List<Cottage> cottages = new ArrayList<>();
        cottages.add(c);
        ((CottageOwner) co).setCottages(cottages);
        serviceProviderRepo.save(co);
    }

    private void makeTestDataBoatOwner() {
        ServiceProvider bo = new BoatOwner("mail@gmail.com", "test", "Borko", "Brodic",
                new Address("Kosovska 1", "Novi Sad", "Srbija"), "0665022124");

        List<AdditionalService> additionalServices = new ArrayList<>();
        additionalServices.add(new AdditionalService("additional services for boat 1", 23, "desc of additional service"));
        additionalServices.add(new AdditionalService("additional services for boat 1", 33, "desc of additional service"));
        additionalServices.add(new AdditionalService("additional services for boat 1", 243, "desc of additional service"));
        Boat b = new Boat("brodic", "opis broda",
                new Address("Jadranska 23", "Herceg Novi", "Crna Gora"), 4,
                "no regulations", 10, additionalServices, 80, BoatType.BAY_BOAT, 9,
                "2412312", 100, 60, new ArrayList<>(), new ArrayList<>());
        List<Boat> boats = new ArrayList<>();
        boats.add(b);
        ((BoatOwner) bo).setBoats(boats);
        serviceProviderRepo.save(bo);

        PropertyOwner bo2 = new BoatOwner("pero@gmail.com", "test", "Pero", "Peric",
                new Address("Ulica 1", "Grad 2", "Drzava 2"), "0621241241");
        List<AdditionalService> additSvc2 = new ArrayList<>();
        additSvc2.add(new AdditionalService("additional services for boat 2", 23, "desc of additional service"));
        additSvc2.add(new AdditionalService("additional services for boat 2", 33, "desc of additional service"));
        additSvc2.add(new AdditionalService("additional services for boat 2", 0, "desc of free additional service"));
        Boat b2 = new Boat("brod", "opis broda 2",
                new Address("Test 23", "Test Grad", "Test Drzava"), 10,
                "no regulations", 10, additSvc2, 80, BoatType.BASS_BOAT, 9,
                "123415A2B2", 100, 60, new ArrayList<>(), new ArrayList<>());
        List<Boat> boats2 = new ArrayList<>();
        boats2.add(b2);
        ((BoatOwner) bo2).setBoats(boats2);
        serviceProviderRepo.save(bo2);
    }
}
