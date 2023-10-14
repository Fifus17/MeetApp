import { JSX, createEffect, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";
import { calendarDay } from "~/utils/DateUtils";

interface CalendarCellProps {
  calendarDay: calendarDay;
  onDayClick: (id: number) => void;
  selectedDays: () => Set<number>;
}

const CalendarCell = (props: CalendarCellProps): JSX.Element => {
    
  const configContext = useContext(ConfigContext);
  const globalVariables = useContext(GlobalVariablesContext);

  const id: number = props.calendarDay.id;
  
  return (
    <div class="relative flex flex-col justify-start items-center w-full">
      <div
        class={`${
          props.selectedDays().has(id)
            ? `bg-${configContext!.currentColor()}`
            : ""
        } rounded-xl w-full flex justify-center items-center p-1 aspect-[1/1] z-20 ${
            props.selectedDays().has(id)
            ? "text-text-light"
            : props.calendarDay.otherMonth
            ? "text-text-secondary"
            : "text-text-dark"
        }`}
        onClick={() => props.onDayClick(id)}
      >
        {props.calendarDay.dayOfMonth}
      </div>
      <div class="bg-purple-300 h-3"></div>
      <div
        class={`bg-${configContext!.currentColor()} w-full aspect-[1/1] absolute left-1/2 z-10 ${
          !(id % 7 == 6) &&
          props.selectedDays().has(id + 1) &&
          props.selectedDays().has(id)
            ? ""
            : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default CalendarCell;
