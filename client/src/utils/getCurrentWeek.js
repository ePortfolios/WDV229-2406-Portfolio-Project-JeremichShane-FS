export function getCurrentWeek(weekOffset = 0) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7 * weekOffset);

  const first = currentDate.getDate() - currentDate.getDay();
  const last = first + 6;

  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(first);
  const lastDayOfWeek = new Date(currentDate);
  lastDayOfWeek.setDate(last);

  const sameMonth = firstDayOfWeek.getMonth() === lastDayOfWeek.getMonth();
  const formatFirstDay = { month: "short", day: "numeric" };
  const formatLastDay = { day: "numeric" };

  return `${firstDayOfWeek.toLocaleDateString("en-US", formatFirstDay)} - ${
    sameMonth
      ? lastDayOfWeek.toLocaleDateString("en-US", formatLastDay)
      : lastDayOfWeek.toLocaleDateString("en-US", formatFirstDay)
  }`;
}
