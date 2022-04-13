package com.example.demo.repository;

import com.example.demo.model.BoatOwner;
import com.example.demo.model.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface BoatOwnerRepository extends JpaRepository<BoatOwner, Integer> {

}
