package com.example.calendify.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventDTO {
    private String summary;
    private String location;
    private String description;
    private String colorId;
    private String startDateTime;
    private String endDateTime;
    private String timeZone;
}
