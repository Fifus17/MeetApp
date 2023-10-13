import { JSX, createSignal } from "solid-js";
import CalendarCell from "./CalendarCell";
import WeekDay from "./WeekDay";

interface CalendarProps {
  // pass: number
}

const Calendar = (props: CalendarProps): JSX.Element => {
  const [selectedDays, setSelectedDays] = createSignal<Set<number>>(new Set());

  const handleDayClick = (day: number) => {
    setSelectedDays((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(day)) {
        newSelected.delete(day); // Deselect the day
      } else {
        newSelected.add(day); // Select the day
      }
      return newSelected;
    });
  };

  return (
    <div>
      {/* <CalendarWeekHeader /> */}
      <div class="grid grid-cols-7 grid-rows-6 gap-3 p-4">
        {/* Create the first row with WeekDay components */}
        <WeekDay dayName="Mon" isSelected={true} />
        <WeekDay dayName="Tue" isSelected={false} />
        <WeekDay dayName="Wed" isSelected={false} />
        <WeekDay dayName="Thu" isSelected={false} />
        <WeekDay dayName="Fri" isSelected={false} />
        <WeekDay dayName="Sat" isSelected={false} />
        <WeekDay dayName="Sun" isSelected={false} />

        {/* Create a grid of CalendarCells for the remaining rows */}
        {Array.from({ length: 35 }).map((_, dayOfMonth) => (
          <CalendarCell
            dayOfMonth={dayOfMonth + 1}
            isTheMostRight={dayOfMonth % 7 == 6}
            selectedDays={selectedDays}
            onDayClick={handleDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
