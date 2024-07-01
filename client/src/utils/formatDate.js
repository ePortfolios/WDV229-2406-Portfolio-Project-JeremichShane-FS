export const formatDate = dateString => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
};
