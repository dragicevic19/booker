package com.example.demo;

import com.example.demo.model.*;
import com.example.demo.repository.BoatOwnerRepository;
import com.example.demo.repository.CottageOwnerRepository;
import com.example.demo.repository.FishingInstructorRepository;
import com.example.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class DemoApplication {

//    @Autowired
//    private BoatOwnerRepository boatOwnerRepository;
//    @Autowired
//    private CottageOwnerRepository cottageOwnerRepository;
//    @Autowired
//    private FishingInstructorRepository fishingInstructorRepository;
//    @Autowired
//    private RoleRepository roleRepository;


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
//
//    @Override
//    public void run(String... args) throws Exception {
////        makeRoles();
////        makeTestDataBoatOwner();
////        makeTestDataCottageOwner();
////        makeTestDataInstructor();
//    }
//
//    private void makeRoles() {
//        Role r = new Role();
//        r.setName("ROLE_BOAT_OWNER");
//        roleRepository.save(r);
//
//        Role ra = new Role();
//        r.setName("ROLE_ADMIN");
//        roleRepository.save(ra);
//    }
//
//    private void makeTestDataInstructor() {
//        Address a = new Address();
//        a.setStreet("Jevrejska 2");
//        a.setCity("Novi Sad");
//        a.setCountry("Serbia");
//
//        FishingInstructor i = new FishingInstructor();
//        i.setEmail("misa@gmail.com");
//        i.setPassword("misa123");
//        i.setFirstName("Misa");
//        i.setLastName("Misic");
//        i.setAddress(a);
//        i.setPhoneNumber("06632336321");
//        i.setBiography("my biography");
//        Set<AdditionalService> additionalServices = new HashSet<>();
//        AdditionalService aService = new AdditionalService();
//        aService.setTitle("additional service for fishing adventure 1");
//        aService.setDescription("desc of free additional service");
//        aService.setPrice(0);
//        additionalServices.add(aService);
//        AdditionalService aService2 = new AdditionalService();
//        aService2.setTitle("additional service for fishing adventure 1");
//        aService2.setDescription("desc of additional service");
//        aService2.setPrice(100);
//        additionalServices.add(aService2);
//        AdditionalService aService3 = new AdditionalService();
//        aService3.setTitle("additional service for fishing adventure 1");
//        aService3.setDescription("desc of additional service");
//        aService3.setPrice(56);
//        additionalServices.add(aService3);
//
//        List<String> fishingEqu = new ArrayList<>();
//        fishingEqu.add("stap");
//        fishingEqu.add("mamac");
//        fishingEqu.add("masinica");
//
//        FishingLesson f = new FishingLesson();
//        f.setName("lesson1");
//        f.setDescription("description of first fishing lesson");
//        Address ad = new Address();
//        ad.setStreet("Jadranska 1");
//        ad.setCity("Herceg Novi");
//        ad.setCountry("Montenegro");
//        f.setAddress(ad);
//        f.setCapacity(2);
//        f.setRegulations("18+");
//        f.setCancellationFee(50);
//        f.setLessonPrice(100);
//        f.setFishingEquipment(fishingEqu);
//        List<FishingLesson> lessons = new ArrayList<>();
//        lessons.add(f);
//        i.setFishingLessons(lessons);
//
//        fishingInstructorRepository.save(i);
//    }
//
//    private void makeTestDataCottageOwner() {
//        Address a = new Address();
//        a.setCountry("Serbia");
//        a.setStreet("Vuka Karadzica 1");
//        a.setCity("Novi Sad");
//
//        CottageOwner co = new CottageOwner();
//        co.setEmail("djura@gmail.com");
//        co.setPassword("test");
//        co.setFirstName("Djura");
//        co.setLastName("Djuric");
//        co.setAddress(a);
//        co.setPhoneNumber("0625211252");
//
//        Set<AdditionalService> additionalServices = new HashSet<>();
//        AdditionalService aService = new AdditionalService();
//        aService.setTitle("additional service for cottage 1");
//        aService.setDescription("desc of free additional service");
//        aService.setPrice(0);
//        additionalServices.add(aService);
//        AdditionalService aService2 = new AdditionalService();
//        aService2.setTitle("additional service for cottage 1");
//        aService2.setDescription("desc of additional service");
//        aService2.setPrice(100);
//        additionalServices.add(aService2);
//        AdditionalService aService3 = new AdditionalService();
//        aService3.setTitle("additional service for cottage 1");
//        aService3.setDescription("desc of additional service");
//        aService3.setPrice(56);
//        additionalServices.add(aService3);
//
//        Address address = new Address();
//        address.setStreet("Jadranska 22");
//        address.setCity("Herceg Novi");
//        address.setCountry("Montenegro");
//
//        Cottage c = new Cottage();
//        c.setName("vikendica1");
//        c.setDescription("opis prve vikendice");
//        c.setAddress(address);
//        c.setCapacity(5);
//        c.setRegulations("no regulations");
//        c.setCancellationFee(40);
//        c.setAdditionalServices(additionalServices);
//        c.setDailyPrice(50);
//        List<Cottage> cottages = new ArrayList<>();
//        cottages.add(c);
//        co.setCottages(cottages);
//        cottageOwnerRepository.save(co);
//    }
//
//    private void makeTestDataBoatOwner() {
//        BoatOwner bo = new BoatOwner();
//
//        Address a = new Address();
//        a.setStreet("Kosovska 1");
//        a.setCity("Novi Sad");
//        a.setCountry("Serbia");
//
//        bo.setEmail("mail@gmail.com");
//        bo.setPassword("test");
//        bo.setFirstName("Borko");
//        bo.setLastName("Brodic");
//        bo.setAddress(a);
//        bo.setPhoneNumber("0615221252");
//
//        Set<AdditionalService> additionalServices = new HashSet<>();
//        AdditionalService aService = new AdditionalService();
//        aService.setTitle("additional service for boat 1");
//        aService.setDescription("desc of free additional service");
//        aService.setPrice(0);
//        additionalServices.add(aService);
//        AdditionalService aService2 = new AdditionalService();
//        aService2.setTitle("additional service for boat 1");
//        aService2.setDescription("desc of additional service");
//        aService2.setPrice(123);
//        additionalServices.add(aService2);
//        AdditionalService aService3 = new AdditionalService();
//        aService3.setTitle("additional service for boat 1");
//        aService3.setDescription("desc of additional service");
//        aService3.setPrice(41);
//        additionalServices.add(aService3);
//
//        Boat b = new Boat();
//        b.setName("brodic");
//        b.setDescription("opis broda");
//        Address address = new Address();
//        address.setCountry("Montenegro");
//        address.setCity("Herceg Novi");
//        address.setStreet("Jadranska 23");
//        b.setAddress(address);
//        b.setCapacity(4);
//        b.setRegulations("no regulations");
//        b.setCancellationFee(10);
//        b.setAdditionalServices(additionalServices);
//        b.setDailyPrice(80);
//        b.setType(BoatType.BAY_BOAT);
//        b.setLength(9);
//        b.setEngineNum("231241");
//        b.setEnginePow(100);
//        b.setMaxSpeed(60);
//        b.setFishingEquipment(new ArrayList<>());
//        b.setNavEquipment(new ArrayList<>());
//
//        List<Boat> boats = new ArrayList<>();
//        boats.add(b);
//        bo.setBoats(boats);
//        boatOwnerRepository.save(bo);
//
////        BoatOwner bo2 = new BoatOwner("pero@gmail.com", "test", "Pero", "Peric",
////                new Address("Ulica 1", "Grad 2", "Drzava 2"), "0621241241");
////        Set<AdditionalService> additSvc2 = new HashSet<AdditionalService>();
////        additSvc2.add(new AdditionalService("additional services for boat 2", 23, "desc of additional service"));
////        additSvc2.add(new AdditionalService("additional services for boat 2", 33, "desc of additional service"));
////        additSvc2.add(new AdditionalService("additional services for boat 2", 0, "desc of free additional service"));
////        Boat b2 = new Boat("brod", "opis broda 2",
////                new Address("Test 23", "Test Grad", "Test Drzava"), 10,
////                "no regulations", 10, additSvc2, 80, BoatType.BASS_BOAT, 9,
////                "123415A2B2", 100, 60, new ArrayList<>(), new ArrayList<>());
////        List<Boat> boats2 = new ArrayList<>();
////        boats2.add(b2);
////        bo2.setBoats(boats2);
////        boatOwnerRepository.save(bo2);
//    }
}
