export interface calendarDay {
  id: number;
  dayOfMonth: number;
  otherMonth: boolean;
}

export const fullMonths = [
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

export const fullWeekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

export const shortWeekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]

// Input should be first 3 characters of day name i.e. "Mon", "Fri"
export const checkCurrentWeekDay = (day: string): boolean => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return day == daysOfWeek[dayOfWeek];
};

const getNoDaysInMonth = (monthDifference: number = 0): number => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + monthDifference) % 12;
  const year = currentDate.getFullYear();
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  return daysInMonth;
};

const getFirstWeekDayNumInMonth = (monthDifference: number = 0): number => {
  const currentDate = new Date();
  const year =
    currentDate.getFullYear() + (currentDate.getMonth() + monthDifference) / 12;
  const month = (currentDate.getMonth() + monthDifference) % 12;
  const firstDayOfMonth = new Date(year, month, 1);

  return firstDayOfMonth.getDay();
};

const getNLastDaysNumbersInMonth = (
  n: number,
  monthDifference: number = 0
): calendarDay[] => {
  const daysInMonth = getNoDaysInMonth(monthDifference);
  const lastDays = [];

  for (let i = Math.max(1, daysInMonth - n + 1); i <= daysInMonth; i++)
    lastDays.push({ id: lastDays.length, dayOfMonth: i, otherMonth: true });

  return lastDays;
};

export const generateCalendar = (
  monthDifference: number = 0
): calendarDay[] => {
  const daysInMonth = getNoDaysInMonth(monthDifference);
  const firstDay = getFirstWeekDayNumInMonth(monthDifference);

  // Get days from previous month
  const calendar = getNLastDaysNumbersInMonth(
    Math.max((firstDay + 6) % 7, 0),
    -1
  );

  // Add the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({ id: calendar.length, dayOfMonth: i, otherMonth: false });
  }

  // Calculate the number of days to add to the end of the array to reach the first days of the next month
  const remainingSlots =
    calendar.length > 35 ? 7 * 6 - calendar.length : 7 * 5 - calendar.length;
  for (let i = 1; i <= remainingSlots; i++)
    calendar.push({ id: calendar.length, dayOfMonth: i, otherMonth: true });

  return calendar;
};

export const getMonthName = (monthDifference: number = 0): string => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + monthDifference) % 12;

  return fullMonths[month];
};
