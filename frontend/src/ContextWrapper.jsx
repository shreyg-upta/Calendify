import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

// Reducer function to manage saved events
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

// Function to initialize events from local storage
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

// ContextWrapper component
export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCreateCalendar, setShowCreateCalendar] = useState(true);
  const [labels, setLabels] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  // Memoized filtered events based on labels selection
  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);
  useEffect(() => {
    console.log("isLogin updated:", isLogin);
  }, [isLogin]);

  // Effect to update local storage with saved events
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  // Effect to update labels based on saved events
  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  // Effect to update month index when smallCalendarMonth changes
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  // Effect to clear selectedEvent when showEventModal is false
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  useEffect(() => {
    if (!isLogin) {
      setSelectedEvent(null);
    }
  }, [isLogin]);

  // Function to update label state
  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  // Providing states and functions through GlobalContext.Provider
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        showCreateCalendar,
        setShowCreateCalendar,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
        isLogin,
        setIsLogin,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
