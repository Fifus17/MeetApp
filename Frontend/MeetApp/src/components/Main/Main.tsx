import { JSX } from "solid-js";
import Calendar from "../Mobile/Calendar/Calendar";
import MobileHeader from "../Mobile/Header/MobileHeader";
import WeekDay from "../Mobile/Calendar/WeekDay";

const Main = (): JSX.Element => {
  return (
    <div>
      <MobileHeader />
      <Calendar/>
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
