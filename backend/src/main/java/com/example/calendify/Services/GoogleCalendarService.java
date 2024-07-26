package com.example.calendify.Services;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.CalendarScopes;
import com.google.api.services.calendar.model.Events;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.Getter;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.GeneralSecurityException;

@Getter
@Service
public class GoogleCalendarService {
    private static final String APPLICATION_NAME = "Calendar Management";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private Calendar calendarService;
    private static final String LOCAL_CREDENTIALS_FILE_PATH = "backend/src/main/resources/calendify-428717-ffbb8cd8db80.json";
    private static final String DOCKER_CREDENTIALS_FILE_PATH = "/app/calendify-428717-ffbb8cd8db80.json";

    @PostConstruct
    public void init() throws GeneralSecurityException, IOException {
        String credentialsFilePath = new File(DOCKER_CREDENTIALS_FILE_PATH).isFile() ? DOCKER_CREDENTIALS_FILE_PATH : LOCAL_CREDENTIALS_FILE_PATH;

        boolean fileExists = new File(credentialsFilePath).isFile();
        if (!fileExists) {
            throw new FileNotFoundException("Google credentials file not found: " + credentialsFilePath);
        }

        GoogleCredentials credentials = GoogleCredentials.fromStream(new FileInputStream(credentialsFilePath))
                .createScoped(CalendarScopes.CALENDAR);
        calendarService = new Calendar.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                new HttpCredentialsAdapter(credentials)
        )
                .setApplicationName(APPLICATION_NAME)
                .build();
    }

    public com.google.api.services.calendar.model.Calendar getCalendarDetails(String calendarId) throws IOException {
        return calendarService.calendars().get(calendarId).execute();
    }

    public Events getCalendarEvents(String calendarId) throws IOException {
        return calendarService.events().list(calendarId).execute();
    }
}
