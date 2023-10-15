import { JSX } from "solid-js";
import { PersonAvailability } from "./DayDetails";

export interface HourPoleProps {
    noPeople: number;
    height: number;
    hour: number;
}

const HourPole = (props: HourPoleProps):JSX.Element => {
    return (
        <div class="flex flex-col h-32 mx-2">
            {/* Pole */}
            <div class={`w-2 bg-lime-700 h-{${Math.floor((props.height / props.noPeople) * 100)}%}`}></div>
            {/* Hour */}
            <p>{props.hour}</p>
        </div>
    )
}

export default HourPole;