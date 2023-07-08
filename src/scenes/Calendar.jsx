import { useTheme } from "@mui/material";
import React, { useState } from "react";

import { tokens } from "../theme";

export default function Calendar() {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for you event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dataStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return <div>Calendar</div>;
}
