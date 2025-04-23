package com.phegondev.auth2Peoject.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phegondev.auth2Peoject.dto.LearningPlanDto;
import com.phegondev.auth2Peoject.service.LearningPlanService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/learningplan")
public class LearningPlanController {

    private LearningPlanService learningPlanService;

    //Build Add LearningPlan REST API
    @PostMapping
    public ResponseEntity<LearningPlanDto> createLearningPlan(@RequestBody LearningPlanDto learningPlanDto){
        LearningPlanDto savedLearningPlan = learningPlanService.createLearningPlan(learningPlanDto);
        return new ResponseEntity<>(savedLearningPlan, HttpStatus.CREATED);
    }

    //Build get LearningPlan REST API
    @GetMapping("{id}")
    public ResponseEntity<LearningPlanDto> getLearningPlanById(@PathVariable("id") Long learningPlanId){
      LearningPlanDto learningPlanDto = learningPlanService.getLearningPlanById(learningPlanId);
      return ResponseEntity.ok(learningPlanDto);
    }

    //Build get all LearningPlans REST API
    @GetMapping
    public ResponseEntity<List<LearningPlanDto>> getAllLearningPlans(){
       List<LearningPlanDto> learningplans = learningPlanService.getAllLearningPlans();
      return ResponseEntity.ok(learningplans);
    }

    //Build update LearningPlan REST API
    @PutMapping("{id}")
    public ResponseEntity<LearningPlanDto> updateLearningPlan(@PathVariable("id") Long learningPlanId,@RequestBody LearningPlanDto updatedLearningPlan){

      LearningPlanDto learningPlanDto =  learningPlanService.updateLearningPlan(learningPlanId, updatedLearningPlan);
      return ResponseEntity.ok(learningPlanDto);
    }

    //Build delete LearningPlan REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLearningPlan(@PathVariable("id") Long learningPlanId){
        learningPlanService.deleteLearningPlan(learningPlanId);
        return ResponseEntity.ok("LearningPlan deleted successfully!.");
    }

}

