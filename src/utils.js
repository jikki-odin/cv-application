const monthStrings = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(dateString) {
  if (dateString === "Present") {
    return dateString;
  }

  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const monthString = monthStrings[monthIndex];
  const year = date.getFullYear();

  return `${monthString} ${year}`;
}
