package com.example.calendify.Controllers;

import com.example.calendify.Services.GoogleOAuthService;
import com.example.calendify.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/oauth")
public class OAuthController {

    @Autowired
    private GoogleOAuthService googleOAuthService;

    @Autowired
    private UserService userService;

    @PostMapping("/token")
    public String handleGoogleOAuth(@RequestParam("code") String authorizationCode) throws GeneralSecurityException, IOException {
        String refreshToken = googleOAuthService.getRefreshToken(authorizationCode);
        String email = googleOAuthService.getEmailFromToken(authorizationCode);

        userService.saveUser(email, refreshToken);

        return "User authorized successfully.";
    }
}
