//package com.example.calendify.Controllers.OAuth;
//
//import com.example.calendify.Services.GoogleAddCalendarService;
//import com.google.api.services.calendar.model.Event;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Collections;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/calendar")
//public class CalendarController {
//
//    @Autowired
//    private GoogleAddCalendarService googleAddCalendarService;
//
//    @GetMapping("/authorize")
//    public String authorize() {
//        return googleAddCalendarService.authorize();
//    }
//
//    @GetMapping("/oauth2callback")
//    public String handleOAuth2Callback(@RequestParam("code") String code) {
//        try {
//            googleAddCalendarService.exchangeCodeForTokens(code);
//            return "Tokens exchanged successfully!";
//        } catch (Exception e) {
//            return "Error exchanging tokens: " + e.getMessage();
//        }
//    }
//
//    @PostMapping("/createEvent")
//    public String createEvent(
//            @RequestParam String calendarId,
//            @RequestParam String summary,
//            @RequestParam String location,
//            @RequestParam String description,
//            @RequestParam String startDateTime,
//            @RequestParam String endDateTime) {
//        try {
//            googleAddCalendarService.createEvent(calendarId, summary, location, description, startDateTime, endDateTime);
//            return "Event created successfully!";
//        } catch (Exception e) {
//            return "Error creating event: " + e.getMessage();
//        }
//    }
//
//    @GetMapping("/upcomingEvents")
//    public List<Event> getUpcomingEvents(@RequestParam String calendarId) {
//        try {
//            return googleAddCalendarService.getUpcomingEvents(calendarId);
//        } catch (Exception e) {
//            return Collections.emptyList();
//        }
//    }
//}
