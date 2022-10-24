import Calendar from "color-calendar";
import React, { useEffect, useState } from "react";
import "color-calendar/dist/css/theme-basic.css";
import "color-calendar/dist/css/theme-glass.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useCalendar from "../../hooks/useCalendar";

const MyCalendar = () => {
  const navigate = useNavigate();
  const { events } = useCalendar();
  const [calendar, setCalendar] = useState(null);
  const [lastDate, setLastDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  });
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  });

  useEffect(() => {
    setCalendar(
      new Calendar({
        id: "#color-calendar",
        dropShadow: true,
        eventsData: [],
        customWeekdayValues: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
        customMonthValues: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre"
        ],
        startWeekday: 1,
        dateChanged: (newDate, events) => {
          const year = newDate.getFullYear();
          const month = newDate.getMonth() + 1;
          const day = newDate.getDate();
          setCurrentDate({ year, month, day });
        },
        selectedDateClicked: (newDate, events) => {
          const year = newDate.getFullYear();
          const month = newDate.getMonth() + 1;
          const day = newDate.getDate();
          navigate(`/event/${year}/${month}/${day}`);
        }
      })
    );
  }, [navigate, setCurrentDate]);

  useEffect(() => {
    if (
      lastDate.month === currentDate.month &&
      lastDate.year === currentDate.year &&
      lastDate.day !== currentDate.day
    ) {
      navigate(
        `/event/${currentDate.year}/${currentDate.month}/${currentDate.day}`
      );
    }
    setLastDate(currentDate);
  }, [currentDate, navigate, lastDate]);

  useEffect(() => {
    if (calendar) {
      calendar.setEventsData(events);
    }
  }, [calendar, events]);

  return (
    <div id="Calendar">
      <div id="color-calendar"></div>
    </div>
  );
};

export default MyCalendar;
