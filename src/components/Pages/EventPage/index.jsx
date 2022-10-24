import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCalendar from "../../../hooks/useCalendar";
import Footer from "../../Footer";
import Form from "../../Form";
import Header from "../../Header";
import "./style.css";

const EventPage = () => {
  const params = useParams();

  const { getElement, setElement } = useCalendar();

  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const [midday, setMidday] = useState(false);
  const [midnight, setMidnight] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setDate(new Date(params.year, params.month - 1, params.day));
    const content = getElement({
      year: params.year,
      month: params.month,
      day: params.day
    })?.informations;

    setMidday(content?.midday);
    setMidnight(content?.midnight);
    setNotes(content?.notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setElement(date, { midday, midnight, notes });
    navigate("/");
  };

  //var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
  //alert(date.toLocaleDateString("fr-FR", options));

  return (
    <div id="EventPage">
      <Header
        backURL="/"
        title={`${date.toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit"
        })}`}
      />
      <Form
        handleSubmit={handleSubmit}
        midday={midday}
        setMidday={setMidday}
        midnight={midnight}
        setMidnight={setMidnight}
        notes={notes}
        setNotes={setNotes}
      />
      <Footer />
    </div>
  );
};

export default EventPage;
