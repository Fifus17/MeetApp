import { JSX } from "solid-js";
import Calendar from "../Mobile/Calendar/Calendar";
import MobileHeader from "../Mobile/Header/MobileHeader";
import WeekDay from "../Mobile/Calendar/WeekDay";

const Main = (): JSX.Element => {
  return (
    <div>
      <MobileHeader />
      <Calendar />
    </div>
  );
};

export default Main;
