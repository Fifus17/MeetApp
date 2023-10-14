import { JSX, useContext } from "solid-js";
import { ConfigContext } from "~/Contexts/ConfigContext";


const DayInfo = (): JSX.Element => {
    const configContext = useContext(ConfigContext);

    return (<div class="h-32 bg-red-300 w-full"></div>)
}


export default DayInfo;