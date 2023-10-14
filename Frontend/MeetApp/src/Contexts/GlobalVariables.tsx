import { JSX, createContext, createSignal, onCleanup } from "solid-js";
import { DateYMD } from "~/utils/DateUtils";

export const GlobalVariablesContext = createContext<{
  monthDifference: () => DateYMD;
  setMonthDifference: (date: DateYMD) => void;
  selectedDays: () => Set<DateYMD>;
  setSelectedDays: (days: (prevSelected: Set<DateYMD>) => Set<DateYMD>) => void;
}>();

export function GlobalVariablesProvider(props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | (string & {})
    | null
    | undefined;
}) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const [monthDifference, setMonthDifference] = createSignal({
    year: year,
    month: month,
    day: day,
  });
  const [selectedDays, setSelectedDays] = createSignal<Set<DateYMD>>(new Set());

  // Clean up when the component unmounts
  onCleanup(() => {
    // Perform any cleanup actions, if necessary
  });

  return (
    <GlobalVariablesContext.Provider
      value={{
        monthDifference,
        setMonthDifference,
        selectedDays,
        setSelectedDays,
      }}
    >
      {props.children}
    </GlobalVariablesContext.Provider>
  );
}
