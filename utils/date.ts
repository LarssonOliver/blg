export function formatDate(date: Date): string {
  const dateOptions: Intl.DateTimeFormatOptions = {

    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return date.toLocaleDateString(undefined, dateOptions);
}
