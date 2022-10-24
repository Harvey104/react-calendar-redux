import { useEffect, useState, useContext } from "react";
import CalendarContext from "../contexts/Calendar";

const useCalendar = () => {
  const { dates, updateElement } = useContext(CalendarContext);
  const [events, setEvents] = useState();

  // Mets à jour des events
  useEffect(() => {
    setEvents(
      dates?.elements
        ?.filter(
          (element) =>
            element.informations.midnight || element.informations.midday
        )
        .map((element) => ({
          start: `${element.date.year}-${element.date.month}-${element.date.day}`,
          end: `${element.date.year}-${element.date.month}-${element.date.day}`
        }))
    );
  }, [dates]);

  /** Permet de récupérer un événement en fonction de la date */
  const getElement = (date) => {
    return dates?.elements?.find(
      (element) =>
        element.date.year === date.year &&
        element.date.month === date.month &&
        element.date.day === date.day
    );
  };

  const getElementIndex = (date) => {
    return dates?.elements?.findIndex(
      (element) =>
        element.date.year === date.year &&
        element.date.month === date.month &&
        element.date.day === date.day
    );
  };

  const setElement = (date, informations) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const index = getElementIndex({
      year: year,
      month: month,
      day: day
    });

    updateElement(index, { year, month, day }, informations);
  };

  return { events, dates, getElement, setElement };
};

export default useCalendar;
