import { JSX, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";
import { Color } from "~/utils/ColorsUtils";
import HoursDetails from "./HoursDetails";

export interface PersonAvailability {
    name: string;
    color: Color;
    hours?: TimeAvailability;
}

export interface TimeAvailability {
    start: number;
    end: number;
}

export interface DayDetailsProps {
    noPeople: number;
    info: PersonAvailability[];
}

const DayDetails = (props: DayDetailsProps): JSX.Element => {
    const configContext = useContext(ConfigContext);

    return (<div class="h-32 bg-red-300 w-full">
        {/* <HoursDetails noPeople={props.noPeople} info={props.info}/> */}
    </div>)
}


export default DayDetails;