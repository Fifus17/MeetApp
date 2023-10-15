import { JSX } from "solid-js";
import Calendar from "../Mobile/Calendar/Calendar";
import MobileHeader from "../Mobile/Header/MobileHeader";
import WeekDay from "../Mobile/Calendar/WeekDay";
import DayDetails, { PersonAvailability } from "../DayDetails/DayDetails";
import { Color } from "~/utils/ColorsUtils";

const Main = (): JSX.Element => {

  // ------------------- DayDetails static data -------------------
  const noPeople = 3;
  const info: PersonAvailability[] = [
    {
      name: "John",
      color: Color["rp-light-pink"],
      hours: {
        start: 8,
        end: 14,
      },
    },
    {
      name: "Mary",
      color: Color["rp-light-blue"],
      hours: {
        start: 10,
        end: 16,
      },
    },
    {
      name: "Peter",
      color: Color["rp-purple"],
      hours: {
        start: 12,
        end: 14,
      },
    },
  ];

  return (
    <div>
      <MobileHeader />
      <Calendar/>
      <DayDetails noPeople={noPeople} info={info}/>
      <div class="bg-rp-purple"></div>
      <div class="bg-rp-light-pink"></div>
      <div class="bg-rp-light-blue"></div>
      <div class="bg-rp-dark-blue"></div>
      <div class="bg-rp-dark-pink"></div>
      <div class="bg-rp-orange"></div>
      <div class="bg-rp-yellow"></div>
      <div class="bg-rp-green"></div>
      <div class="bg-rp-sea-green"></div>
      <div class="bg-rp-aqua"></div>
    </div>
  );
};

export default Main;
