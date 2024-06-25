export const formatTime = dateString => {
  const date = new Date(dateString);
  let timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return timeString.replace("AM", "am").replace("PM", "pm");
};
