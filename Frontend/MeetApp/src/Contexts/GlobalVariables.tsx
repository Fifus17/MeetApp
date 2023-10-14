import { JSX, createContext, createSignal, onCleanup } from "solid-js";

export const GlobalVariablesContext = createContext<
  | {
      monthDifference: () => number;
      setMonthDifference: (color: number) => void;
      selectedDays: () => Map<number, Set<number>>;
      setSelectedDays: (days: (prevSelected: Map<number, Set<number>>) => Map<number, Set<number>>) => void;
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
  const [selectedDays, setSelectedDays] = createSignal<Map<number, Set<number>>>(new Map<number, Set<number>>([[0, new Set()]]));

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
