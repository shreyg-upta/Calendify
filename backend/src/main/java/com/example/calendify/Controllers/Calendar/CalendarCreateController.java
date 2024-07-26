package com.example.calendify.Controllers.Calendar;

import com.example.calendify.DTOs.CalendarDTO;
import com.example.calendify.DTOs.RequestCalendarDTO;
import com.example.calendify.Services.GoogleCalendarService;
import com.google.api.services.calendar.model.Calendar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/calendar/create")
public class CalendarCreateController {

    @Autowired
    private GoogleCalendarService googleCalendarService;

    @PostMapping
    public String createCalendar(@RequestBody RequestCalendarDTO calendarDTO) throws GeneralSecurityException, IOException {
        Calendar calendar = new Calendar();
        calendar.setSummary(calendarDTO.getSummary());
        calendar.setDescription(calendarDTO.getDescription());
        calendar.setTimeZone(calendarDTO.getTimeZone());
        calendar.setLocation(calendarDTO.getLocation());

        Calendar createdCalendar = googleCalendarService.getCalendarService().calendars().insert(calendar).execute();
        return createdCalendar.getId();
    }
}
