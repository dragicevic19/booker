package com.example.demo.repository;

import com.example.demo.model.BoatOwner;
import com.example.demo.model.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface BoatOwnerRepository extends JpaRepository<BoatOwner, Integer> {

    @Query(value = "SELECT * FROM USERS", nativeQuery = true)
    public List<BoatOwner> findAllIncludingDeleted();

    @Query(value = "SELECT * FROM USERS AS u WHERE u.is_deleted = true", nativeQuery = true)
    public List<BoatOwner> findAllOnlyDeleted();

    BoatOwner findByEmail(String email);
}
