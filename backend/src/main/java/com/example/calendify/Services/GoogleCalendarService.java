package com.example.calendify.Services;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.CalendarScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.Getter;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Map;

@Getter
@Service
public class GoogleCalendarService {
    private static final String APPLICATION_NAME = "Calendar Management";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private Calendar calendarService;

    @PostConstruct
    public void init() throws GeneralSecurityException, IOException {
        GoogleCredentials credentials = GoogleCredentials.fromStream(new FileInputStream("src/main/resources/dotted-module-427217-f5-4605446de900.json"))
                .createScoped(CalendarScopes.CALENDAR);
        calendarService = new Calendar.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                new HttpCredentialsAdapter(credentials)
        )
                .setApplicationName(APPLICATION_NAME)
                .build();
    }


}
