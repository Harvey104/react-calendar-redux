import React, { useEffect, useReducer } from "react";
import { initializer, reducer } from "../reducers/calendar";
import initialValue from "../data/mock.json";

import CalendarContext from "../contexts/Calendar";
import { updateOne } from "../actions/calendar";

/**
 * Provider du Calendrier
 * Permet de gérer l'hydratation de l'app' avec les données du calendrier
 */
const CalendarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue, initializer);

  useEffect(() => {
    localStorage.setItem("veggieCalendar", JSON.stringify(state));
  }, [state]);

  const value = {
    dates: state,
    updateElement: (index, date, informations) =>
      dispatch(updateOne(index, date, informations))
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarProvider;
