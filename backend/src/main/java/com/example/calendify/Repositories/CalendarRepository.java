package com.example.calendify.Repositories;

import com.example.calendify.Entities.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Long> {
    Calendar findByCalendarId(String calendarId);
}
