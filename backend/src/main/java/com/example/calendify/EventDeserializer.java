package com.example.calendify;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventDateTime;

import java.io.IOException;

public class EventDeserializer extends JsonDeserializer<Event> {

    @Override
    public Event deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonNode node = p.getCodec().readTree(p);
        Event event = new Event();

        event.setSummary(node.get("summary").asText());
        event.setLocation(node.get("location").asText());
        event.setDescription(node.get("description").asText());

        JsonNode startNode = node.get("start");
        EventDateTime start = new EventDateTime();
        start.setDateTime(new com.google.api.client.util.DateTime(startNode.get("dateTime").asText()));
        start.setTimeZone(startNode.get("timeZone").asText());
        event.setStart(start);

        JsonNode endNode = node.get("end");
        EventDateTime end = new EventDateTime();
        end.setDateTime(new com.google.api.client.util.DateTime(endNode.get("dateTime").asText()));
        end.setTimeZone(endNode.get("timeZone").asText());
        event.setEnd(end);

        return event;
    }
}
