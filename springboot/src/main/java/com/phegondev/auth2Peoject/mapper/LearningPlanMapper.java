package com.phegondev.auth2Peoject.mapper;

import com.phegondev.auth2Peoject.dto.LearningPlanDto;
import com.phegondev.auth2Peoject.model.LearningPlan;

public class LearningPlanMapper {

    public static LearningPlanDto mapToLearningPlanDto(LearningPlan learningPlan) {
        return new LearningPlanDto(
            learningPlan.getId(),
            learningPlan.getItemName(),
            learningPlan.getDescription(),
            learningPlan.getTimerange(),
            learningPlan.getTotalItems(),
            learningPlan.getCompletedItems(),
            learningPlan.getProgressPercentage()
        );
    }

    public static LearningPlan mapToLearningPlan(LearningPlanDto learningPlanDto){
        return new LearningPlan(
            learningPlanDto.getId(),
            learningPlanDto.getItemName(),
            learningPlanDto.getDescription(),
            learningPlanDto.getTimerange(),
            learningPlanDto.getTotalItems(),
            learningPlanDto.getCompletedItems(),
            learningPlanDto.getProgressPercentage()
        );
    }
}


