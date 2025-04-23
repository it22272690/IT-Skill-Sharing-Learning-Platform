package com.phegondev.auth2Peoject.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class LearningPlanDto {

    private Long id;
   private String itemName;
    private String description;
    private String timerange;
    private int totalItems;
    private int completedItems;
    private float progressPercentage;
 


}


