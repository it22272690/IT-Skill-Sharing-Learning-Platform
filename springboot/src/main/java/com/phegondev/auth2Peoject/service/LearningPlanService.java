package com.phegondev.auth2Peoject.service;

import java.util.List;
import com.phegondev.auth2Peoject.dto.LearningPlanDto;

public interface LearningPlanService {

    LearningPlanDto createLearningPlan(LearningPlanDto learningPlanDto);

    LearningPlanDto getLearningPlanById(Long learningPlanId);

    List<LearningPlanDto> getAllLearningPlans();

    LearningPlanDto updateLearningPlan(Long learningPlanId, LearningPlanDto updatedLearningPlan);

    void deleteLearningPlan(Long learningPlanId);
    
}
