package com.example.calendify.Services;

import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.calendar.CalendarScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

@Getter
@Service
public class GoogleOAuthService {
    private static final String APPLICATION_NAME = "Calendar Management";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    @Value("${google.client.client-id}")
    private String clientId;

    @Value("${google.client.client-secret}")
    private String clientSecret;

    @Value("${google.client.redirect-uri}")
    private String redirectUri;

    public String getRefreshToken(String authorizationCode) throws GeneralSecurityException, IOException {
        GoogleTokenResponse tokenResponse = new GoogleAuthorizationCodeTokenRequest(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                clientId,
                clientSecret,
                authorizationCode,
                redirectUri
        ).execute();

        return tokenResponse.getRefreshToken();
    }

    public String getEmailFromToken(String authorizationCode) throws GeneralSecurityException, IOException {
        GoogleTokenResponse tokenResponse = new GoogleAuthorizationCodeTokenRequest(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                clientId,
                clientSecret,
                authorizationCode,
                redirectUri
        ).execute();

        GoogleIdToken idToken = tokenResponse.parseIdToken();
        Payload payload = idToken.getPayload();
        return payload.getEmail();
    }
}
