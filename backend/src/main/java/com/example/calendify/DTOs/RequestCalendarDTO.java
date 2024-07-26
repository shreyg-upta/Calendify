package com.example.calendify.DTOs;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class RequestCalendarDTO {
    private String summary;
    private String description;
    private String timeZone;
    private String location;
}
