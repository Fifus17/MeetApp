import { JSX, createContext, createSignal, onCleanup } from "solid-js";
import { DateYMD } from "~/utils/DateUtils";

export const GlobalVariablesContext = createContext<{
  monthDifference: () => DateYMD;
  setMonthDifference: (date: DateYMD) => void;
  selectedDays: () => Set<string>;
  setSelectedDays: (days: (prevSelected: Set<string>) => Set<string>) => void;
  selectMode: () => boolean;
  setSelectMode: (mode: boolean) => void;
  inspectedDay: () => DateYMD;
  setInspectedDay: (date: DateYMD) => void;
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

  const [selectedDays, setSelectedDays] = createSignal<Set<string>>(new Set());

  const [selectMode, setSelectMode] = createSignal(false);

  const [inspectedDay, setInspectedDay] = createSignal<DateYMD>({year: 9999, month: 99, day: 99});

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
        selectMode,
        setSelectMode,
        inspectedDay,
        setInspectedDay,
      }}
    >
      {props.children}
    </GlobalVariablesContext.Provider>
  );
}
