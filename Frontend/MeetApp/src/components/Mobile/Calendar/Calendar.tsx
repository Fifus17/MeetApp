import { For, JSX, createSignal, useContext } from "solid-js";
import CalendarCell from "./CalendarCell";
import WeekDay from "./WeekDay";
import { generateCalendar, shortWeekDays } from "~/utils/DateUtils";
import MonthCarousel from "./MonthCarousel";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";

const Calendar = (): JSX.Element => {
  const globalVariables = useContext(GlobalVariablesContext);
  const [selectedDays, setSelectedDays] = createSignal(new Set<number>());

  const handleDayClick = (id: number) => {

    setSelectedDays((prevSelected) => {
      let newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });

    globalVariables?.setSelectedDays((prevSelected) => {
        let newSelected = new Map(prevSelected);
        if (newSelected.has(globalVariables?.monthDifference()!)) {
            newSelected.get(globalVariables?.monthDifference()!)!.add(id);
        } else {
            newSelected.set(globalVariables?.monthDifference()!, new Set([id]));
        }
        return newSelected;
        });

        console.log(globalVariables?.selectedDays());
  };

  const handleMonthClick = (direction: number) => {
    globalVariables?.setMonthDifference(
      globalVariables?.monthDifference()! + direction
    );
    
    if (globalVariables!.selectedDays().has(globalVariables?.monthDifference()!)) {
        setSelectedDays(globalVariables!.selectedDays().get(globalVariables?.monthDifference()!)!);
    } else {
        globalVariables!.setSelectedDays((prevSelected) => {
            let newSelected = new Map(prevSelected);
            newSelected.set(globalVariables?.monthDifference()!, new Set());
            return newSelected;
        });
        setSelectedDays(globalVariables!.selectedDays().get(globalVariables?.monthDifference()!)!);
    }
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
