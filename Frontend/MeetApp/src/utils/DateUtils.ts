export interface calendarDay {
  id: number;
  date: DateYMD;
  // dayOfMonth: number;
  otherMonth: boolean;
}

export interface DateYMD {
  year: number;
  month: number;
  day: number;
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

const getNoDaysInMonth = (date: DateYMD): number => {
  const nextMonth = getOtherMonth(date, 1);
  const lastDayOfMonth = new Date(nextMonth.year, nextMonth.month, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  return daysInMonth;
};

const getNoDaysInMonthDateYMD = (date: DateYMD): number => {
  const lastDayOfMonth = new Date(date.year, date.month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  return daysInMonth;
};

const getFirstWeekDayNumInMonth = (date: DateYMD): number => {
  return new Date(date.year, date.month, 1).getDay();
};

const getNLastDaysNumbersInMonth = (
  n: number,
  date: DateYMD
): calendarDay[] => {
  const daysInMonth = getNoDaysInMonth(date);
  const lastDays = [];

  for (let i = Math.max(1, daysInMonth - n + 1); i <= daysInMonth; i++)
    lastDays.push({ id: lastDays.length, otherMonth: true , date: {year: date.year, month: date.month, day: i}});

  return lastDays;
};

export const generateCalendar = (
  date: DateYMD
): calendarDay[] => {
  const daysInMonth = getNoDaysInMonth(date);
  const firstDay = getFirstWeekDayNumInMonth(date);

  // Get days from previous month
  const calendar = getNLastDaysNumbersInMonth(
    Math.max((firstDay + 6) % 7, 0),
    getOtherMonth(date, -1)
  );

  // Add the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({ id: calendar.length, otherMonth: false, date: {year: date.year, month: date.month, day: i}});
  }

  // Calculate the number of days to add to the end of the array to reach the first days of the next month
  const remainingSlots = calendar.length > 35 ? 7 * 6 - calendar.length : 7 * 5 - calendar.length;
  const nextMonth: DateYMD = getOtherMonth(date, 1);
  for (let i = 1; i <= remainingSlots; i++)
    calendar.push({ id: calendar.length, otherMonth: true, date: {year: nextMonth.year, month: nextMonth.month, day: i}});

  return calendar;
};

export const getMonthName = (date: DateYMD): string => {
  return fullMonths[date.month];
};

export const getNextDay = (date: DateYMD): DateYMD => {
  const daysInMonth = getNoDaysInMonthDateYMD(date);
  const isNextMonth = date.day + 1 > daysInMonth;
  const day = isNextMonth ? 1 : date.day + 1;
  const isNextYear = isNextMonth ? date.month + 1 > 11 : false;
  const month = isNextYear ? 0 : (isNextMonth ? date.month + 1 : date.month);
  const year = isNextYear ? date.year + 1 : date.year;

  return { year: year, month: month, day: day };
}

export const getOtherMonth = (date: DateYMD, monthDifference: number): DateYMD => {
  const year = date.month + monthDifference > 11 ? date.year + 1 : (date.month + monthDifference < 0 ? date.year - 1 : date.year);
  const month = ((date.month + monthDifference) % 12 + 12) % 12;

  return { year: year, month: month, day: date.day };
}

export const getDateKey = (date: DateYMD): string => {
  return `${date.year}-${date.month+1}-${date.day}`;
}