import { For, JSX, createSignal, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { GlobalVariablesContext } from "~/Contexts/GlobalVariables";
import { getMonthName } from "~/utils/DateUtils";

export interface MonthCarouselProps {
    changeSelected: (direction: number) => void;
}

const MonthCarousel = (props: MonthCarouselProps): JSX.Element => {
  const configContext = useContext(ConfigContext);
  const globalVariables = useContext(GlobalVariablesContext);

  const positions = [
    "-left-1/2 -translate-x-1/2",
    "-translate-x-1/2",
    "left-1/2 -translate-x-1/2",
    "right-0 translate-x-1/2",
    "-right-1/2 translate-x-1/2",
  ];

  const [months, setMonths] = createSignal([
    getMonthName(globalVariables!.monthDifference() - 2),
    getMonthName(globalVariables!.monthDifference() - 1),
    getMonthName(globalVariables!.monthDifference()),
    getMonthName(globalVariables!.monthDifference() + 1),
    getMonthName(globalVariables!.monthDifference() + 2),
  ]);

  const directions = [-1, -1, 0, 1, 1];

  const handleMonthClick = (direction: number) => {
    props.changeSelected(direction);
    setMonths([
      getMonthName(globalVariables!.monthDifference() - 2),
      getMonthName(globalVariables!.monthDifference() - 1),
      getMonthName(globalVariables!.monthDifference()),
      getMonthName(globalVariables!.monthDifference() + 1),
      getMonthName(globalVariables!.monthDifference() + 2),
    ]);
  };

  return (
    <div class="relative" style={`transition: transform 0.5s ease;`}>
      <For each={[0, 1, 2, 3, 4]}>
        {(index) => {
          return (
            <div
              class={`text-${configContext!.currentColor()} text-3xl font-semibold absolute ${
                positions[
                  (globalVariables!.monthDifference() + 100 + index) % 5
                ]
              }`}
              onClick={() =>
                handleMonthClick(
                  directions[
                    (globalVariables!.monthDifference() + 100 + index) % 5
                  ]
                )
              }
            >
              {months()[(globalVariables!.monthDifference() + 100 + index) % 5]}
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default MonthCarousel;
