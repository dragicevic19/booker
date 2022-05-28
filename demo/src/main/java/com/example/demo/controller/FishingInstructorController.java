package com.example.demo.controller;
import com.example.demo.dto.CottageRequest;
import com.example.demo.dto.FishingLessonRequest;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "auth/")
public class FishingInstructorController {

    @Autowired
    private UserService userService;

    @Autowired
    private FishingInstructorService fishingInstructorService;

    @PostMapping("add-lesson")
//    @PreAuthorize("hasRole('COTTAGE_OWNER')")
    public ResponseEntity<Boolean> addFishingLesson(@RequestBody FishingLessonRequest fishingLessonRequest) {

        FishingInstructor fI = (FishingInstructor) userService.findById(fishingLessonRequest.getInstructor_id());
        if (fI == null) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
        FishingLesson fishingLesson = this.fishingInstructorService.addFishingLesson(fishingLessonRequest, fI);
        if (fishingLesson == null) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
