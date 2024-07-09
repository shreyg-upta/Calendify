package com.example.calendify.Services;

import com.example.calendify.Entities.User;
import com.example.calendify.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(String email, String refreshToken) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
        }
        user.setRefreshToken(refreshToken);
        return userRepository.save(user);
    }
}
