/**
 * Retourne un objet contenant le contenu du localStorage ou de l'initialState
 */
const initializer = (initialState) =>
  JSON.parse(localStorage.getItem("veggieCalendar")) || initialState;

const reducer = (state, action) => {
  switch (action.type) {
    // Modifie l'ensemble des événements du calendrier
    case "CALENDAR/UPDATE_ALL":
      return action.dates;
    // Modifie ou ajoute un événément au calendrier
    case "CALENDAR/UPDATE_ONE":
      const newState =
        action.id === -1
          ? {
              ...state,
              elements: [
                ...state.elements,
                { date: action.date, informations: action.informations }
              ]
            }
          : {
              ...state,
              ...(state.elements[action.id] = {
                ...state.elements[action.id],
                informations: action.informations
              })
            };

      return newState;
    default:
      return state;
  }
};

export { initializer, reducer };
