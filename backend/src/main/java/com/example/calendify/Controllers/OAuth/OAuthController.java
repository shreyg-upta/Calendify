// package com.example.calendify.Controllers.OAuth;

// import com.example.calendify.Services.OAuthService;
// import com.example.calendify.Services.Database.UserService;
// import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.io.IOException;
// import java.security.GeneralSecurityException;

// @RestController
// @RequestMapping("/api/oauth2")
// public class OAuthController {

//     private static final Logger logger = LoggerFactory.getLogger(OAuthController.class);

//     @Autowired
//     private OAuthService oauthService;

//     @Autowired
//     private UserService userService;

//     @PostMapping("/callback")
//     public String handleOAuth2Callback(@RequestParam String code) throws GeneralSecurityException, IOException {
//         logger.info("Received OAuth2 callback with code: {}", code);

//         GoogleTokenResponse tokenResponse;
//         try {
//             tokenResponse = oauthService.exchangeCodeForTokens(code);
//         } catch (Exception e) {
//             logger.error("Error exchanging code for tokens", e);
//             throw new RuntimeException("Error exchanging code for tokens: " + e.getMessage());
//         }

//         String email;
//         try {
//             email = oauthService.getEmailFromToken(tokenResponse);
//         } catch (Exception e) {
//             logger.error("Error getting email from token", e);
//             throw new RuntimeException("Error getting email from token: " + e.getMessage());
//         }

//         if (email == null || email.isEmpty()) {
//             logger.error("Email could not be retrieved from the token.");
//             throw new IllegalArgumentException("Email could not be retrieved from the token.");
//         }

//         if (!userService.isUserExists(email)) {
//             String refreshToken = oauthService.getRefreshToken(tokenResponse);
//             if (refreshToken == null || refreshToken.isEmpty()) {
//                 logger.error("Refresh token could not be retrieved.");
//                 throw new IllegalArgumentException("Refresh token could not be retrieved.");
//             }
//             userService.saveUser(email, refreshToken);
//         }

//         logger.info("OAuth2 callback handled successfully for email: {}", email);
//         return "OAuth2 callback handled successfully for email: " + email;
//     }
// }
