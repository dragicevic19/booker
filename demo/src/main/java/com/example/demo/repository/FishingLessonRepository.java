package com.example.demo.repository;

import com.example.demo.model.CottageOwner;
import com.example.demo.model.FishingLesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FishingLessonRepository extends JpaRepository<FishingLesson, Integer> {

}
