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
public class EventUpdateController {


    private final GoogleCalendarService googleCalendarService;

    public EventUpdateController(GoogleCalendarService googleCalendarService) {
        this.googleCalendarService = googleCalendarService;
    }

    @PutMapping("/update")
    public String updateEvent(@RequestParam String calendarId, @RequestParam String eventId, @RequestBody EventDTO eventDTO) throws GeneralSecurityException, IOException {
        // Fetch the existing event
        Event event = googleCalendarService.getCalendarService().events().get(calendarId, eventId).execute();

        // Update only non-null fields
        if (eventDTO.getSummary() != null) {
            event.setSummary(eventDTO.getSummary());
        }
        if (eventDTO.getLocation() != null) {
            event.setLocation(eventDTO.getLocation());
        }
        if (eventDTO.getDescription() != null) {
            event.setDescription(eventDTO.getDescription());
        }
        if (eventDTO.getStartDateTime() != null) {
            DateTime startDateTime = new DateTime(eventDTO.getStartDateTime());
            EventDateTime start = new EventDateTime()
                    .setDateTime(startDateTime)
                    .setTimeZone(eventDTO.getTimeZone());
            event.setStart(start);
        }
        if (eventDTO.getEndDateTime() != null) {
            DateTime endDateTime = new DateTime(eventDTO.getEndDateTime());
            EventDateTime end = new EventDateTime()
                    .setDateTime(endDateTime)
                    .setTimeZone(eventDTO.getTimeZone());
            event.setEnd(end);
        }

        // Update the event
        Event updatedEvent = googleCalendarService.getCalendarService().events().update(calendarId, eventId, event).execute();

        return "Event updated successfully with ID: " + updatedEvent.getId();
    }
}
