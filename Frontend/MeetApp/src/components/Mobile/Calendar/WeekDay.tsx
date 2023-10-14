import { JSX, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { checkCurrentWeekDay } from "~/utils/DateUtils";

interface WeekDayProps {
  dayName: string;
}

const WeekDay = (props: WeekDayProps): JSX.Element => {
  const configContext = useContext(ConfigContext);

  return (
    <div
      class={`p-1 font-semibold rounded-lg text-sm h-min flex justify-center mt-auto ${
        checkCurrentWeekDay(props.dayName)
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
