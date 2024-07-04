package com.example.calendify.Controllers.Event;

import com.example.calendify.DTOs.EventDTO;
import com.example.calendify.Services.GoogleCalendarService;
import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/event")
public class EventAddController {


    private final GoogleCalendarService googleCalendarService;

    public EventAddController(GoogleCalendarService googleCalendarService) {
        this.googleCalendarService = googleCalendarService;
    }

    @PostMapping("/add")
    public String addEvent(@RequestParam String calendarId, @RequestBody EventDTO eventDTO) throws GeneralSecurityException, IOException {
        Event event = new Event()
                .setSummary(eventDTO.getSummary())
                .setLocation(eventDTO.getLocation())
                .setDescription(eventDTO.getDescription());

        DateTime startDateTime = new DateTime(eventDTO.getStartDateTime());
        EventDateTime start = new EventDateTime()
                .setDateTime(startDateTime)
                .setTimeZone(eventDTO.getTimeZone());
        event.setStart(start);

        DateTime endDateTime = new DateTime(eventDTO.getEndDateTime());
        EventDateTime end = new EventDateTime()
                .setDateTime(endDateTime)
                .setTimeZone(eventDTO.getTimeZone());
        event.setEnd(end);

        Event createdEvent = googleCalendarService.getCalendarService().events().insert(calendarId, event).execute();

        return createdEvent.getId();  // Return the event ID
    }
}
