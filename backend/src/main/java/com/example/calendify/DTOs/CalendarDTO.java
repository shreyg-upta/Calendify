package com.example.calendify.DTOs;

import lombok.Data;

@Data
public class CalendarDTO {
    private String summary;
    //title is description
    private String description;
    private String timeZone;
    private String location;
}
