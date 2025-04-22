package com.phegondev.auth2Peoject.controller;

import com.phegondev.auth2Peoject.model.LearningResource;
import com.phegondev.auth2Peoject.service.LearningResourceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
@RequiredArgsConstructor
public class LearningResourceController {

    private final LearningResourceService learningResourceService;

    // Create a new course/tutorial
    @PostMapping
    public ResponseEntity<LearningResource> createResource(@RequestBody LearningResource resource) {
        return ResponseEntity.ok(learningResourceService.createResource(resource));
    }

    // Get all courses/tutorials
    @GetMapping
    public ResponseEntity<List<LearningResource>> getAllResources() {
        return ResponseEntity.ok(learningResourceService.getAllResources());
    }

    // Get a resource by ID
    @GetMapping("/{id}")
    public ResponseEntity<LearningResource> getResourceById(@PathVariable Long id) {
        return learningResourceService.getResourceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get resources by type (Course or Tutorial)
    @GetMapping("/type/{type}")
    public ResponseEntity<List<LearningResource>> getResourcesByType(@PathVariable String type) {
        return ResponseEntity.ok(learningResourceService.getResourcesByType(type));
    }

    // Get all active resources (visible to users)
    @GetMapping("/active")
    public ResponseEntity<List<LearningResource>> getActiveResources() {
        return ResponseEntity.ok(learningResourceService.getActiveResources());
    }

    // Get all resources a user is enrolled in
    @GetMapping("/enrolled/{userId}")
    public ResponseEntity<List<LearningResource>> getResourcesByEnrolledUser(@PathVariable Long userId) {
        return ResponseEntity.ok(learningResourceService.getResourcesByEnrolledUserId(userId));
    }

    // Update a course/tutorial
    @PutMapping("/{id}")
    public ResponseEntity<LearningResource> updateResource(@PathVariable Long id, @RequestBody LearningResource resource) {
        return ResponseEntity.ok(learningResourceService.updateResource(id, resource));
    }

    // Delete (soft delete) a resource
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        learningResourceService.deleteResource(id);
        return ResponseEntity.ok().build();
    }
}
