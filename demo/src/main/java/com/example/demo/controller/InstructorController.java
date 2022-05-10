package com.example.demo.controller;

import com.example.demo.dto.CottageRequest;
import com.example.demo.dto.LessonRequest;
import com.example.demo.model.Cottage;
import com.example.demo.model.CottageOwner;
import com.example.demo.model.FishingInstructor;
import com.example.demo.model.FishingLesson;
import com.example.demo.service.CottageOwnerService;
import com.example.demo.service.FishingInstructorService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "api/")
public class InstructorController {
    @Autowired
    private UserService userService;

    @Autowired
    private FishingInstructorService fishingInstructorService;

    @PostMapping("/add-lesson")
    @PreAuthorize("hasRole('INSTRUCTOR')")
    public ResponseEntity<Boolean> addLesson(@RequestBody LessonRequest lessonRequest) {

        FishingInstructor fI = (FishingInstructor) userService.findById(lessonRequest.getOwner_id());
        if (fI == null) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
        FishingLesson fishingLesson = this.fishingInstructorService.addLesson(lessonRequest, fI);
        if (fishingLesson == null) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
