export const getDayName = (dateString) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const currentDate = new Date();
  const nextDay = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const nextNextDay = new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000);

  if (date.toDateString() === currentDate.toDateString()) {
    return "Today";
  } else if (date.toDateString() === nextDay.toDateString()) {
    return "Tomorrow";
  } else if (date.toDateString() === nextNextDay.toDateString()) {
    return days[date.getDay()];
  } else {
    return days[date.getDay()];
  }
};

export const getHours = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
