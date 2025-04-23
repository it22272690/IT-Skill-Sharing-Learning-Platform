package com.phegondev.auth2Peoject.service;

import com.phegondev.auth2Peoject.model.Post;
import com.phegondev.auth2Peoject.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public List<Post> getPostsByUserId(Long userId) {
        return postRepository.findByUserId(userId);
    }

    public Post updatePost(Long id, Post updatedPost) {
        return postRepository.findById(id)
                .map(existing -> {
                    existing.setDescription(updatedPost.getDescription());
                    existing.setPost(updatedPost.getPost());
                    existing.setLikes(updatedPost.getLikes());
                    return postRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}
