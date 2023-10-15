import { For, JSX, createSignal, useContext } from "solid-js";
import CalendarCell from "./CalendarCell";
import WeekDay from "./WeekDay";
import {
  DateYMD,
  compareDates,
  generateCalendar,
  getDateKey,
  getOtherMonth,
  shortWeekDays,
} from "~/utils/DateUtils";
import MonthCarousel from "./MonthCarousel";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";
import { ConfigContext } from "~/Contexts/ConfigContext";
import EditCalendarButton from "./EditCalendarButton";

const Calendar = (): JSX.Element => {
  const globalVariables = useContext(GlobalVariablesContext);
  const [selectedDays, setSelectedDays] = createSignal(new Set<string>());

  const handleDayClick = (date: DateYMD) => {
    if (globalVariables!.selectMode()) {
      const key = getDateKey(date);
      console.log(key);
      setSelectedDays((prevSelected) => {
        let newSelected = new Set(prevSelected);
        if (newSelected.has(key)) {
          newSelected.delete(key);
        } else {
          newSelected.add(key);
        }
        console.log(newSelected);
        return newSelected;
      });

      globalVariables!.setSelectedDays((prevSelected) => {
        let newSelected = new Set(prevSelected);
        if (newSelected.has(key)) {
          newSelected.delete(key);
        } else {
          newSelected.add(key);
        }
        console.log(newSelected);
        return newSelected;
      });
    } else {
      if (compareDates(globalVariables!.inspectedDay(), date))
        globalVariables!.setInspectedDay({ year: 9999, month: 99, day: 99 });
      else globalVariables!.setInspectedDay(date);
    }
  };

  const handleMonthClick = (direction: number) => {
    globalVariables?.setMonthDifference(
      getOtherMonth(globalVariables?.monthDifference()!, direction)
    );
  };

  return (
    <div>
      <MonthCarousel changeSelected={handleMonthClick} />
      <div class="h-4"></div>
      <div class="grid grid-cols-7 grid-rows-6 gap-2 p-4">
        <For each={shortWeekDays}>{(day) => <WeekDay dayName={day} />}</For>

        <For each={generateCalendar(globalVariables!.monthDifference())}>
          {(day) => (
            <CalendarCell
              calendarDay={day}
              onDayClick={handleDayClick}
              selectedDays={selectedDays}
            />
          )}
        </For>
      </div>
      <div class="w-full flex justify-center">
        <EditCalendarButton />
      </div>
      <div class="h-4"></div>
    </div>
  );
};

export default Calendar;
