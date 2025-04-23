package com.phegondev.auth2Peoject.repository;

import com.phegondev.auth2Peoject.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUserId(Long userId);
}
