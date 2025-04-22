package com.phegondev.auth2Peoject.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.phegondev.auth2Peoject.model.LearningResource;
import com.phegondev.auth2Peoject.repository.LearningResourceRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LearningResourceService {

    private final LearningResourceRepository learningResourceRepository;

    // Create a new course/tutorial
    public LearningResource createResource(LearningResource resource) {
        return learningResourceRepository.save(resource);
    }

    // Retrieve all resources
    public List<LearningResource> getAllResources() {
        return learningResourceRepository.findAll();
    }

    // Retrieve a specific resource by ID
    public Optional<LearningResource> getResourceById(Long id) {
        return learningResourceRepository.findById(id);
    }

    // Retrieve resources by type (Course or Tutorial)
    public List<LearningResource> getResourcesByType(String type) {
        return learningResourceRepository.findByType(type);
    }

    // Retrieve all resources a user is enrolled in
    public List<LearningResource> getResourcesByEnrolledUserId(Long userId) {
        return learningResourceRepository.findByEnrolledUserIdsContains(userId);
    }

    // Retrieve only active resources
    public List<LearningResource> getActiveResources() {
        return learningResourceRepository.findByIsActiveTrue();
    }

    // Update an existing resource
    public LearningResource updateResource(Long id, LearningResource updatedResource) {
        return learningResourceRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(updatedResource.getTitle());
                    existing.setDescription(updatedResource.getDescription());
                    existing.setContent(updatedResource.getContent());
                    existing.setPrerequisites(updatedResource.getPrerequisites());
                    existing.setType(updatedResource.getType());
                    existing.setActive(updatedResource.isActive());
                    return learningResourceRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Learning resource not found"));
    }

    // Delete (or deactivate) a resource
    public void deleteResource(Long id) {
        learningResourceRepository.findById(id).ifPresent(resource -> {
            resource.setActive(false);
            learningResourceRepository.save(resource);
        });
    }
}