//package com.example.calendify.Services;
//
//import com.google.api.client.auth.oauth2.Credential;
//import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
//import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
//import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.gson.GsonFactory;
//import lombok.Getter;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import javax.annotation.PostConstruct;
//import java.io.IOException;
//import java.security.GeneralSecurityException;
//import java.util.List;
//
//@Service
//public class CredentialFactory {
//
//    @Value("${google.client.client-id}")
//    private String clientId;
//
//    @Value("${google.client.client-secret}")
//    private String clientSecret;
//
//    @Value("${google.scopes}")
//    private List<String> scopes;
//
//    @Getter
//    private GoogleAuthorizationCodeFlow flow;
//
//    @PostConstruct
//    public void init() throws GeneralSecurityException, IOException {
//        var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//        var jsonFactory = GsonFactory.getDefaultInstance();
//
//        flow = new GoogleAuthorizationCodeFlow.Builder(
//                httpTransport,
//                jsonFactory,
//                clientId,
//                clientSecret,
//                scopes
//        ).setAccessType("offline").build();
//    }
//
//    public Credential createAndStoreCredential(GoogleTokenResponse tokenResponse, String userId) throws IOException {
//        return flow.createAndStoreCredential(tokenResponse, userId);
//    }
//
//    public Credential loadCredential(String userId) throws IOException {
//        return flow.loadCredential(userId);
//    }
//}
