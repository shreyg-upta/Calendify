package com.example.calendify.Controllers.Calendar;

import com.example.calendify.DTOs.RequestCalendarDTO;
import com.example.calendify.Services.GoogleCalendarService;
import com.google.api.services.calendar.model.Calendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/calendar/update")
public class CalendarUpdateController {

    @Autowired
    private GoogleCalendarService googleCalendarService;

    @PutMapping
    public String updateCalendar(@RequestParam String calendarId, @RequestBody RequestCalendarDTO calendarDTO) throws GeneralSecurityException, IOException {
        Calendar calendar = googleCalendarService.getCalendarService().calendars().get(calendarId).execute();

        if (calendarDTO.getSummary() != null) {
            calendar.setSummary(calendarDTO.getSummary());
        }
        if (calendarDTO.getDescription() != null) {
            calendar.setDescription(calendarDTO.getDescription());
        }
        if (calendarDTO.getTimeZone() != null) {
            calendar.setTimeZone(calendarDTO.getTimeZone());
        }
        if (calendarDTO.getLocation() != null) {
            calendar.setLocation(calendarDTO.getLocation());
        }

        googleCalendarService.getCalendarService().calendars().update(calendarId, calendar).execute();

        return "Calendar updated successfully!";
    }
}
