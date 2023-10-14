import { JSX, createEffect, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";
import { DateYMD, calendarDay, getDateKey, getNextDay } from "~/utils/DateUtils";

interface CalendarCellProps {
  calendarDay: calendarDay;
  onDayClick: (date: DateYMD) => void;
  selectedDays: () => Set<string>;
}

const CalendarCell = (props: CalendarCellProps): JSX.Element => {
  const configContext = useContext(ConfigContext);
  const globalVariables = useContext(GlobalVariablesContext);

  const date: DateYMD = props.calendarDay.date;
  const dateKey: string = getDateKey(props.calendarDay.date);
  const id: number = props.calendarDay.id;
  const nextDayKey: string = getDateKey(getNextDay(date));

  return (
    <div class="relative flex flex-col justify-start items-center w-full">
      <div
        class={`${
          props.selectedDays().has(dateKey)
            ? `bg-${configContext!.currentColor()}`
            : ""
        } rounded-xl w-full flex justify-center items-center p-1 aspect-[1/1] z-20 ${
          props.selectedDays().has(dateKey)
            ? "text-text-light"
            : props.calendarDay.otherMonth
            ? "text-text-secondary"
            : "text-text-dark"
        }`}
        onClick={() => props.onDayClick(date)}
      >
        {props.calendarDay.date.day}
      </div>
      <div class="bg-purple-300 h-3"></div>
      <div
        class={`bg-${configContext!.currentColor()} w-full aspect-[1/1] absolute left-1/2 z-10 ${
          !(id % 7 == 6) &&
          props.selectedDays().has(nextDayKey) &&
          props.selectedDays().has(dateKey)
            ? ""
            : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default CalendarCell;
