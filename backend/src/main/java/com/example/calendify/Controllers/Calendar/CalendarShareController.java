package com.example.calendify.Controllers.Calendar;

import com.example.calendify.Services.GoogleCalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping("/api/calendar/share")
public class CalendarShareController {

    @Autowired
    private GoogleCalendarService googleCalendarService;

    @PostMapping
    public void shareCalendar(@RequestParam String calendarId, @RequestParam String email) throws GeneralSecurityException, IOException {
        com.google.api.services.calendar.model.AclRule rule = new com.google.api.services.calendar.model.AclRule();
        com.google.api.services.calendar.model.AclRule.Scope scope = new com.google.api.services.calendar.model.AclRule.Scope();
        scope.setType("user").setValue(email);
        rule.setScope(scope).setRole("reader");

        googleCalendarService.getCalendarService().acl().insert(calendarId, rule).execute();
    }
}
