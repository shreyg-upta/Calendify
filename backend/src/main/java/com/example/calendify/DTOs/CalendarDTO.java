package com.example.calendify.DTOs;

import lombok.Data;

@Data
public class CalendarDTO {
    private String calendarId;
    private Long userId;
    private double rating;
    private String labels;
    private String type; // public, private, or unlisted
}
