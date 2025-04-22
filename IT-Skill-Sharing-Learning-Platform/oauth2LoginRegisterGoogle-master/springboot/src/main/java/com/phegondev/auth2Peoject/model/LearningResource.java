package com.phegondev.auth2Peoject.model;



import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "learning_resources")
public class LearningResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resourceId;

    private String title;

    @Lob
    private String description;

    @Lob
    private String content; // Can be rich text, links, or references to files (PDFs/videos)

    @Lob
    private String prerequisites;

    private String type; // "Course" or "Tutorial"

    @ElementCollection
    private List<Long> enrolledUserIds; // List of users enrolled in this resource

    private boolean isActive = true; // To mark if the resource is visible/available
}
