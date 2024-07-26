package com.example.calendify.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "calendars")
public class Calendar {

    @Id
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String calendarId;
    private Long userId;
    private double rating;
    private int numberOfRatings;
    private String labels;
    private String type;
}
