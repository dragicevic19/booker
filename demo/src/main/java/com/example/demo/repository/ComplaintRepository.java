package com.example.demo.repository;
import com.example.demo.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {
    List<Complaint> findByDeletedNot(boolean active);
}
