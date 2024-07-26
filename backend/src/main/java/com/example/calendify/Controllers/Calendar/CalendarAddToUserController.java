package com.example.calendify.Controllers.Calendar;

import com.example.calendify.Services.GoogleCalendarService;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.CalendarListEntry;
import com.google.api.services.calendar.model.AclRule;
import com.google.api.services.calendar.model.AclRule.Scope;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.auth.http.HttpCredentialsAdapter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/calendar")
public class CalendarAddToUserController {

    @Autowired
    private GoogleCalendarService googleCalendarService;

    private static final String CLIENT_ID = "95760422165-fp5f91hneg4aj9v2blj71cqjoimpqkao.apps.googleusercontent.com";
    private static final String CLIENT_SECRET = "";
    private static final String REDIRECT_URI = "http://localhost:3000";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();
    private static final Logger LOGGER = Logger.getLogger(CalendarAddToUserController.class.getName());

    private GoogleAuthorizationCodeFlow googleAuthorizationCodeFlow;

    public CalendarAddToUserController() throws IOException {
        googleAuthorizationCodeFlow = new GoogleAuthorizationCodeFlow.Builder(
                HTTP_TRANSPORT,
                JSON_FACTORY,
                CLIENT_ID,
                CLIENT_SECRET,
                Collections.singleton("https://www.googleapis.com/auth/calendar"))
                .setAccessType("offline")
                .build();
    }

    @PostMapping("/addToUser")
    public String addCalendarToUser(@RequestParam String calendarId, @RequestParam String authorizationCode)
            throws GeneralSecurityException, IOException {

        try {
            LOGGER.info("Starting token exchange");
            GoogleTokenResponse tokenResponse = googleAuthorizationCodeFlow
                    .newTokenRequest(authorizationCode)
                    .setRedirectUri(REDIRECT_URI)
                    .execute();

            String accessToken = tokenResponse.getAccessToken();
            GoogleCredentials credentials = GoogleCredentials.create(new com.google.auth.oauth2.AccessToken(accessToken, null));

            // Retrieve the user's email
            GoogleIdToken idToken = tokenResponse.parseIdToken();
            Payload payload = idToken.getPayload();
            String userEmail = payload.getEmail();
            LOGGER.info("User email: " + userEmail);

            // Build a new authorized API client service
            Calendar service = new Calendar.Builder(
                    HTTP_TRANSPORT,
                    JSON_FACTORY,
                    new HttpCredentialsAdapter(credentials))
                    .setApplicationName("Your Application Name")
                    .build();

            // Share the calendar with the user
            shareCalendarWithUser( calendarId, userEmail);
            LOGGER.info("Shared calendar with user succesfully");
            // Add the calendar to the user's calendar list
            CalendarListEntry calendarListEntry = new CalendarListEntry();
            calendarListEntry.setId(calendarId);
            CalendarListEntry createdCalendarListEntry = service.calendarList().insert(calendarListEntry).execute();

            LOGGER.info("Calendar successfully added to user's calendar list: " + createdCalendarListEntry.getSummary());
            return createdCalendarListEntry.getSummary();

        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "An error occurred: ", e);
            throw e;
        }
    }

    private void shareCalendarWithUser(String calendarId, String userEmail) throws IOException {
        AclRule rule = new AclRule();
        Scope scope = new Scope();
        scope.setType("user").setValue(userEmail);
        rule.setScope(scope).setRole("reader");

        AclRule createdRule = googleCalendarService.getCalendarService().acl().insert(calendarId, rule).execute();
        LOGGER.info("Calendar shared with user: " + createdRule.getId());
    }
}
