package com.example.calendify.Services.Database;

import com.example.calendify.Entities.Calendar;
import com.example.calendify.Repositories.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CalendarService {

    @Autowired
    private CalendarRepository calendarRepository;

    public Calendar saveCalendar(Calendar calendar) {
        return calendarRepository.save(calendar);
    }

    public Optional<Calendar> getCalendarById(Long id) {
        return calendarRepository.findById(id);
    }

    public Calendar getCalendarByCalendarId(String calendarId) {
        return calendarRepository.findByCalendarId(calendarId);
    }

    public void deleteCalendar(Long id) {
        calendarRepository.deleteById(id);
    }
}
