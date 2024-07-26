package com.example.calendify.Entities;

import org.hibernate.Session;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import java.io.Serializable;
import java.util.concurrent.ThreadLocalRandom;

public class RandomIdGenerator implements IdentifierGenerator {

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) {
        long id;
        boolean isUnique;
        int maxRetries = 10;
        int retryCount = 0;

        // Convert the session to Hibernate's Session to use the createQuery method properly
        Session hibernateSession = ((EntityManager) session).unwrap(Session.class);

        do {
            // Generate a 9-digit random number (100000000 to 999999999)
            id = 100000000L + ThreadLocalRandom.current().nextLong(900000000L);

            // Check if the ID already exists in the database
            TypedQuery<Long> query = hibernateSession.createQuery(
                    "select count(c.id) from Calendar c where c.id = :id", Long.class);
            query.setParameter("id", id);
            isUnique = query.getSingleResult().equals(0L);

            retryCount++;
        } while (!isUnique && retryCount < maxRetries);

        if (!isUnique) {
            throw new RuntimeException("Unable to generate unique ID after " + maxRetries + " attempts.");
        }

        return id;
    }
}
