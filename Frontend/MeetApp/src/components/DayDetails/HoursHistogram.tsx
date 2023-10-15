import { For, JSX } from "solid-js"
import { HoursDetailsProps } from "./HoursDetails";
import HourPole from "./HourPole";

const HoursHistogram = (props: HoursDetailsProps): JSX.Element => {
    return (<div class="flex">
        <For each={Array.from({ length: 24 }, (_, i) => i)}>
        {(item, index) => 
            <HourPole hour={index()} noPeople={5} height={4}/>
        }
        </For>
    </div>)
}

export default HoursHistogram;