package com.example.demo.repository;

import com.example.demo.model.Boat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoatRepository extends JpaRepository<Boat, Integer> {
}
