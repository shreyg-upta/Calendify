package com.example.calendify.Controllers.Calendar;

import com.example.calendify.Entities.Calendar;
import com.example.calendify.Services.Database.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calendar")
public class CalendarRatingController {

    @Autowired
    private CalendarService calendarService;

    // API to find the rating of a calendar by its ID
    @GetMapping("/rating")
    public CalendarRatingResponse getCalendarRating(@RequestParam String calendarId) {
        Calendar calendar = calendarService.getCalendarByCalendarId(calendarId);
        if (calendar != null) {
            return new CalendarRatingResponse(calendar.getRating(), calendar.getNumberOfRatings());
        } else {
            throw new RuntimeException("Calendar not found with ID: " + calendarId);
        }
    }

    // API to update the rating and number of ratings for a calendar
    @PutMapping("/rating")
    public CalendarRatingResponse updateCalendarRating(@RequestParam String calendarId, @RequestParam double newRating) {
        Calendar calendar = calendarService.getCalendarByCalendarId(calendarId);
        if (calendar != null) {
            int currentNumberOfRatings = calendar.getNumberOfRatings();
            double currentRating = calendar.getRating();

            // Update the number of ratings
            int updatedNumberOfRatings = currentNumberOfRatings + 1;

            // Update the rating using a weighted average formula
            double updatedRating = ((currentRating * currentNumberOfRatings) + newRating) / updatedNumberOfRatings;

            // Set the updated values
            calendar.setRating(updatedRating);
            calendar.setNumberOfRatings(updatedNumberOfRatings);

            calendarService.saveCalendar(calendar);

            return new CalendarRatingResponse(updatedRating, updatedNumberOfRatings);
        } else {
            throw new RuntimeException("Calendar not found with ID: " + calendarId);
        }
    }

    public static class CalendarRatingResponse {
        private double rating;
        private int numberOfRatings;

        public CalendarRatingResponse(double rating, int numberOfRatings) {
            this.rating = rating;
            this.numberOfRatings = numberOfRatings;
        }

        public double getRating() {
            return rating;
        }

        public void setRating(double rating) {
            this.rating = rating;
        }

        public int getNumberOfRatings() {
            return numberOfRatings;
        }

        public void setNumberOfRatings(int numberOfRatings) {
            this.numberOfRatings = numberOfRatings;
        }
    }
}
