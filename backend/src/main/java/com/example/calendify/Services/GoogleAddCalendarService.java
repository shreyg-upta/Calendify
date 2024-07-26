//package com.example.calendify.Services;
//
//import com.google.api.client.auth.oauth2.Credential;
//import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
//import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeRequestUrl;
//import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
//import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.gson.GsonFactory;
//import com.google.api.services.calendar.Calendar;
//import com.google.api.services.calendar.model.Event;
//import com.google.api.services.calendar.model.EventDateTime;
//import com.google.api.services.calendar.model.Events;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import javax.annotation.PostConstruct;
//import java.io.IOException;
//import java.security.GeneralSecurityException;
//import java.util.Collections;
//import java.util.List;
//
//@Service
//public class GoogleAddCalendarService {
//
//    @Value("${google.oauth.callback.uri}")
//    private String CALLBACK_URI;
//
//    @Value("${google.client.client-id}")
//    private String CLIENT_ID;
//
//    @Value("${google.client.client-secret}")
//    private String CLIENT_SECRET;
//
//    @Value("${google.scopes}")
//    private List<String> SCOPES;
//
//    @Value("${google.application.name}")
//    private String APPLICATION_NAME;
//
//    private GoogleAuthorizationCodeFlow flow;
//
//    @PostConstruct
//    public void init() throws IOException, GeneralSecurityException {
//        var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//        var jsonFactory = GsonFactory.getDefaultInstance();
//
//        flow = new GoogleAuthorizationCodeFlow.Builder(
//                httpTransport,
//                jsonFactory,
//                CLIENT_ID,
//                CLIENT_SECRET,
//                SCOPES
//        ).setAccessType("offline").build();
//    }
//
//    public String authorize() {
//        GoogleAuthorizationCodeRequestUrl url = flow.newAuthorizationUrl();
//        return url.setRedirectUri(CALLBACK_URI).build();
//    }
//
//    public void exchangeCodeForTokens(String code) throws IOException {
//        try {
//            GoogleTokenResponse tokenResponse = flow.newTokenRequest(code)
//                    .setRedirectUri(CALLBACK_URI)
//                    .execute();
//
//            Credential credential = flow.createAndStoreCredential(tokenResponse, "user");
//        } catch (Exception e) {
//            System.err.println("Token Response Exception: " + e.getMessage());
//            throw e;
//        }
//    }
//
//    public void createEvent(String calendarId, String summary, String location, String description, String startDateTime, String endDateTime) throws IOException, GeneralSecurityException {
//        var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//        var jsonFactory = GsonFactory.getDefaultInstance();
//
//        Credential credential = flow.loadCredential("user");
//
//        Calendar service = new Calendar.Builder(httpTransport, jsonFactory, credential)
//                .setApplicationName(APPLICATION_NAME)
//                .build();
//
//        Event event = new Event()
//                .setSummary(summary)
//                .setLocation(location)
//                .setDescription(description);
//
//        EventDateTime start = new EventDateTime()
//                .setDateTime(new com.google.api.client.util.DateTime(startDateTime))
//                .setTimeZone("America/Los_Angeles");
//        event.setStart(start);
//
//        EventDateTime end = new EventDateTime()
//                .setDateTime(new com.google.api.client.util.DateTime(endDateTime))
//                .setTimeZone("America/Los_Angeles");
//        event.setEnd(end);
//
//        service.events().insert(calendarId, event).execute();
//    }
//
//    public List<Event> getUpcomingEvents(String calendarId) throws IOException, GeneralSecurityException {
//        var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//        var jsonFactory = GsonFactory.getDefaultInstance();
//
//        Credential credential = flow.loadCredential("user");
//
//        Calendar service = new Calendar.Builder(httpTransport, jsonFactory, credential)
//                .setApplicationName(APPLICATION_NAME)
//                .build();
//
//        Events events = service.events().list(calendarId)
//                .setMaxResults(10)
//                .setOrderBy("startTime")
//                .setSingleEvents(true)
//                .execute();
//
//        return events.getItems();
//    }
//}
