package com.example.calendify.Controllers.Calendar;

import com.example.calendify.Services.GoogleCalendarService;
import com.google.api.services.calendar.model.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.Events;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/calendar")
public class CalendarDetailsController {

    @Autowired
    private GoogleCalendarService googleCalendarService;

    @GetMapping("/details")
    public ResponseEntity<Calendar> getCalendarDetails(@RequestParam String calendarId) {
        try {
            Calendar calendar = googleCalendarService.getCalendarDetails(calendarId);
            return ResponseEntity.ok(calendar);
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/events")
    public ResponseEntity<List<Event>> getCalendarEvents(@RequestParam String calendarId) {
        try {
            Events events = googleCalendarService.getCalendarEvents(calendarId);
            List<Event> eventList = events.getItems();
            return ResponseEntity.ok(eventList);
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }
}
