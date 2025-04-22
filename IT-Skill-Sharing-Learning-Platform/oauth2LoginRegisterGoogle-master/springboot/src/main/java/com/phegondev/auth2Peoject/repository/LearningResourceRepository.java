package com.phegondev.auth2Peoject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.phegondev.auth2Peoject.model.LearningResource;
import java.util.List;

public interface LearningResourceRepository extends JpaRepository<LearningResource, Long> {

    // Find all resources by type (e.g., "Course" or "Tutorial")
    List<LearningResource> findByType(String type);

    // Find resources created/enrolled by a specific user
    List<LearningResource> findByEnrolledUserIdsContains(Long userId);

    // Find only active resources
    List<LearningResource> findByIsActiveTrue();
}
