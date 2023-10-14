import { JSX, createEffect, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";
import {
  DateYMD,
  calendarDay,
  compareDates,
  getDateKey,
  getNextDay,
} from "~/utils/DateUtils";
import Dot from "./Dot";

interface CalendarCellProps {
  calendarDay: calendarDay;
  onDayClick: (date: DateYMD) => void;
  selectedDays: () => Set<string>;
}

// might need to take more complicated conditions to functions, might not rerender properly though
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
          (props.selectedDays().has(dateKey) &&
            globalVariables!.selectMode()) ||
          (compareDates(
            globalVariables!.inspectedDay(),
            props.calendarDay.date
          ) &&
            !globalVariables!.selectMode())
            ? `bg-${configContext!.currentColor()}`
            : ""
        } rounded-xl w-4/5 flex justify-center items-center p-1 aspect-[1/1] z-20 ${
          (props.selectedDays().has(dateKey) &&
            globalVariables!.selectMode()) ||
          (compareDates(
            globalVariables!.inspectedDay(),
            props.calendarDay.date
          ) &&
            !globalVariables!.selectMode())
            ? "text-text-light"
            : props.calendarDay.otherMonth
            ? "text-text-secondary"
            : "text-text-dark"
        } font-semibold`}
        onClick={() => props.onDayClick(date)}
      >
        {props.calendarDay.date.day}
      </div>
      <div class="flex"><Dot color="rp-light-pink"/><Dot color="rp-light-blue"/><Dot color="rp-purple"/></div>
      <div
        class={`bg-${
          globalVariables!.selectMode() ? configContext!.currentColor() : ""
        } w-4/5 aspect-[1/1] absolute left-2/3 z-10 ${
          !(id % 7 == 6) &&
          globalVariables!.selectMode() &&
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
