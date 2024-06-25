export function getCurrentWeek(weekOffset = 0) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7 * weekOffset);

  const first = currentDate.getDate() - currentDate.getDay();
  const last = first + 6;

  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(first);
  const lastDayOfWeek = new Date(currentDate);
  lastDayOfWeek.setDate(last);

  // Format the dates to "Month Day" format
  const format = { month: "long", day: "numeric" };
  return `${firstDayOfWeek.toLocaleDateString(
    "en-US",
    format
  )} - ${lastDayOfWeek.toLocaleDateString("en-US", format)}`;
}
