import { JSX } from "solid-js"
import { PersonAvailability } from "./DayDetails";
import HoursHistogram from "./HoursHistogram";

export interface HoursDetailsProps {
    noPeople: number;
    info: PersonAvailability[];
}
// Postponed -> after backend
const HoursDetails = (props: HoursDetailsProps): JSX.Element => {

    

    return (<div>
        <HoursHistogram noPeople={props.noPeople} info={props.info}/>
    </div>)
}

export default HoursDetails;