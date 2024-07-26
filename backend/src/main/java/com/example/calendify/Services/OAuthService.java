package com.example.calendify.Services;

import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Getter
@Service
public class OAuthService {

    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    @Value("${google.client.client-id}")
    private String clientId;

    @Value("${google.client.client-secret}")
    private String clientSecret;

    @Value("${google.client.redirect-uri}")
    private String redirectUri;

    public GoogleTokenResponse exchangeCodeForTokens(String authorizationCode) throws GeneralSecurityException, IOException {
        return new GoogleAuthorizationCodeTokenRequest(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                clientId,
                clientSecret,
                authorizationCode,
                redirectUri
        ).execute();
    }

    public String getRefreshToken(GoogleTokenResponse tokenResponse) {
        return tokenResponse.getRefreshToken();
    }

    public String getEmailFromToken(GoogleTokenResponse tokenResponse) throws IOException {
        GoogleIdToken idToken = tokenResponse.parseIdToken();
        Payload payload = idToken.getPayload();
        return payload.getEmail();
    }
}
