package com.phegondev.auth2Peoject.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    private Long userId;

    @Lob
    private String post; // base64-encoded image

    private String description;

    private int likes = 0;
}
