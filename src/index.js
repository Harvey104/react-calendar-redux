import "./styles.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import CalendarProvider from "./providers/Calendar";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CalendarProvider>
        <Router />
      </CalendarProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
