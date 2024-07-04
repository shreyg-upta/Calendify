package com.example.calendify.Controllers.Event;

import com.example.calendify.Services.GoogleCalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/event")
public class EventDeleteController {


    private final GoogleCalendarService googleCalendarService;

    public EventDeleteController(GoogleCalendarService googleCalendarService) {
        this.googleCalendarService = googleCalendarService;
    }

    @DeleteMapping("/delete")
    public String deleteEvent(@RequestParam String calendarId, @RequestParam String eventId) throws GeneralSecurityException, IOException {
        googleCalendarService.getCalendarService().events().delete(calendarId, eventId).execute();
        return "Event deleted successfully!";
    }
}
