import WeekDay from "~/components/Mobile/Calendar/WeekDay"; // Import the WeekDay component correctly

export default function Home() {
  return (
    <main>
      <WeekDay dayName="Mon" isSelected={true}/>
    </main>
  );
}
