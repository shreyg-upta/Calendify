package com.example.calendify.Services.Database;

import com.example.calendify.Entities.User;
import com.example.calendify.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(String email, String refreshToken) {
        User user = new User();
        user.setEmail(email);
        user.setRefreshToken(refreshToken);
        userRepository.save(user);
    }

    public boolean isUserExists(String email) {
        return userRepository.findByEmail(email) != null;
    }
}
