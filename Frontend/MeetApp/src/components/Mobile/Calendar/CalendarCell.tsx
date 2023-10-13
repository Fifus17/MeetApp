import { JSX } from "solid-js";

interface CalendarCellProps {
  dayOfMonth: number
  isTheMostRight?: boolean
  selectedDays: () => Set<number>
  onDayClick: (day: number) => void
}

const CalendarCell = (props: CalendarCellProps): JSX.Element => {
  return (
    <div class=" relative flex flex-col justify-start items-center w-full">
      <div
        class={`${props.selectedDays().has(props.dayOfMonth) ? "bg-rp-green" : ""} rounded-xl w-full flex justify-center items-center p-1 aspect-[1/1] z-20 ${
            props.selectedDays().has(props.dayOfMonth) ? "text-text-light" : "text-text-dark"
        }`} onClick={() => props.onDayClick(props.dayOfMonth)}
      >
        {props.dayOfMonth}
      </div>
      <div class="bg-purple-300 h-3"></div>
      <div 
        class={`bg-rp-green w-full aspect-[1/1] absolute left-1/2 z-10 ${
          (!props.isTheMostRight && (props.selectedDays().has(props.dayOfMonth+1) && props.selectedDays().has(props.dayOfMonth))) ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default CalendarCell;
