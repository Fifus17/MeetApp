import { JSX, createContext, createSignal, onCleanup } from "solid-js";
import { DateYMD } from "~/utils/DateUtils";

export const GlobalVariablesContext = createContext<
  | {
      monthDifference: () => number;
      setMonthDifference: (color: number) => void;
      selectedDays: () => Set<DateYMD>;
      setSelectedDays: (days: (prevSelected: Set<DateYMD>) => Set<DateYMD>) => void;
    }
>();

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
  const [monthDifference, setMonthDifference] = createSignal(0);
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
