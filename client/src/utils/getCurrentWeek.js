export function getCurrentWeek() {
  const currentDate = new Date();
  const first = currentDate.getDate() - currentDate.getDay();
  const last = first + 6;

  const firstDayOfWeek = new Date(currentDate.setDate(first)).toLocaleDateString();
  const lastDayOfWeek = new Date(currentDate.setDate(last)).toLocaleDateString();

  return `${firstDayOfWeek} - ${lastDayOfWeek}`;
}
