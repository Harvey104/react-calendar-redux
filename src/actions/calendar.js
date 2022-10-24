export const updateAll = (dates) => ({
  type: "CALENDAR/UPDATE_ALL",
  dates
});

export const updateOne = (id, date, informations) => ({
  type: "CALENDAR/UPDATE_ONE",
  id,
  date,
  informations
});
