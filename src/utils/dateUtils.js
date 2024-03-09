export function getDayFormat(timestamp) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getUTCDay();
  return days[dayIndex];
}

export function getDateFormat(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
}

export function getTimeFormat(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
