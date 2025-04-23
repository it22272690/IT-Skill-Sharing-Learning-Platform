package com.phegondev.auth2Peoject.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.phegondev.auth2Peoject.dto.LearningPlanDto;
import com.phegondev.auth2Peoject.exception.ResourceNotFoundException;
import com.phegondev.auth2Peoject.mapper.LearningPlanMapper;
import com.phegondev.auth2Peoject.model.LearningPlan;
import com.phegondev.auth2Peoject.repository.LearningPlanRepository;
import com.phegondev.auth2Peoject.service.LearningPlanService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class LearningPlanServiceImpl implements LearningPlanService{

    private LearningPlanRepository learningPlanRepository;

    @Override
    public LearningPlanDto createLearningPlan(LearningPlanDto learningPlanDto) {
        
        LearningPlan learningPlan = LearningPlanMapper.mapToLearningPlan(learningPlanDto);
        LearningPlan savedLearningPlan  = learningPlanRepository.save(learningPlan);

        return LearningPlanMapper.mapToLearningPlanDto(savedLearningPlan);
    }

    @Override
    public LearningPlanDto getLearningPlanById(Long learningPlanId) {
        
        LearningPlan learningPlan = learningPlanRepository.findById(learningPlanId)
            .orElseThrow(() -> new ResourceNotFoundException("LearningPlan is not exist"));

        return LearningPlanMapper.mapToLearningPlanDto(learningPlan);
    }

    @Override
    public List<LearningPlanDto> getAllLearningPlans() {
        
        List<LearningPlan> learningPlanList = learningPlanRepository.findAll();
        return learningPlanList.stream().map((learningPlan) -> LearningPlanMapper.mapToLearningPlanDto(learningPlan))
            .collect(Collectors.toList());
    }

    @Override
    public LearningPlanDto updateLearningPlan(Long learningPlanId, LearningPlanDto updatedLearningPlan) {
        
        LearningPlan learningPlan =  learningPlanRepository.findById(learningPlanId).orElseThrow(
            () -> new ResourceNotFoundException("LearningPlan is not exist")
        );

        learningPlan.setItemName(updatedLearningPlan.getItemName());
        learningPlan.setDescription(updatedLearningPlan.getDescription());
        learningPlan.setTimerange(updatedLearningPlan.getTimerange());
        learningPlan.setTotalItems(updatedLearningPlan.getTotalItems());
        learningPlan.setCompletedItems(updatedLearningPlan.getCompletedItems());
        learningPlan.setProgressPercentage(updatedLearningPlan.getProgressPercentage());

        LearningPlan updatedLearningPlanObj = learningPlanRepository.save(learningPlan);

        return LearningPlanMapper.mapToLearningPlanDto(updatedLearningPlanObj);
    }

    @Override
    public void deleteLearningPlan(Long learningPlanId) {
        
        LearningPlan learningPlan =  learningPlanRepository.findById(learningPlanId).orElseThrow(
            () -> new ResourceNotFoundException("LearningPlan is not exist")
        );

        learningPlanRepository.deleteById(learningPlanId);
        
    }
}
