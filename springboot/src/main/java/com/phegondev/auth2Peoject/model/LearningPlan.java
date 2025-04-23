package com.phegondev.auth2Peoject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "learning_plan")
public class LearningPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "Description")
    private String description;

    @Column(name = "time_range")
    private String timerange;

    @Column(name = "total_Items")
    private int totalItems;

    @Column(name = "completed_Items")
    private int completedItems;

    @Column(name = "progress_Percentage")
    private float progressPercentage;

    
    
}


