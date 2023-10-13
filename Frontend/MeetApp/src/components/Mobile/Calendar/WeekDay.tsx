import { JSX, useContext } from "solid-js";
import { ConfigContext } from "~/configuration/ConfigContext";

interface WeekDayProps {
  dayName: string;
  isSelected: boolean; // might be changed to accessor for signal
}

const WeekDay = (props: WeekDayProps): JSX.Element => {
  const configContext = useContext(ConfigContext);

  return (
    <div
      class={`p-1 font-semibold rounded-lg text-sm h-min flex justify-center mt-auto ${
        props.isSelected
          ? `text-white bg-${configContext!.currentColor()}`
          : "text-text-secondary"
      }`}
    >
      {props.dayName}
      <div class="hidden text-rp-green bg-rp-green"></div> {/* to be fixed */}
    </div>
  );
};

export default WeekDay;
