import { For, JSX, createSignal, useContext } from "solid-js";
import CalendarCell from "./CalendarCell";
import WeekDay from "./WeekDay";
import { DateYMD, generateCalendar, getDateKey, shortWeekDays } from "~/utils/DateUtils";
import MonthCarousel from "./MonthCarousel";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";

const Calendar = (): JSX.Element => {
  const globalVariables = useContext(GlobalVariablesContext);
  const [selectedDays, setSelectedDays] = createSignal(new Set<string>());

  const handleDayClick = (date: DateYMD) => {

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

//     globalVariables?.setSelectedDays((prevSelected) => {
//         let newSelected = new Set(prevSelected);
//         selectedDays().forEach((day) => { newSelected.add(day) });
//         return newSelected;
//         });

//         console.log(globalVariables?.selectedDays());
//         console.log(selectedDays());
  };

  const handleMonthClick = (direction: number) => {
    globalVariables?.setMonthDifference(
      globalVariables?.monthDifference()! + direction
    );
  };

  return (
    <div>
      <MonthCarousel changeSelected={handleMonthClick}/>
      <div class="grid grid-cols-7 grid-rows-6 gap-3 p-4">
        <For each={shortWeekDays}>
            {(day) => (
                <WeekDay dayName={day}/>
            )}
        </For>

        <For each={generateCalendar(globalVariables?.monthDifference())}>
          {(day) => (
            <CalendarCell calendarDay={day} onDayClick={handleDayClick} selectedDays={selectedDays}/>
          )}
        </For>
      </div>
      <button>Save</button>
    </div>
  );
};

export default Calendar;
