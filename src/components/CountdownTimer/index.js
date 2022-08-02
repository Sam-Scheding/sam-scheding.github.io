import React from "react";
import { useCountdown } from "./utils";
import "./style.css";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const CountdownTimer = () => {
  const WEDDING_DATE = new Date("Dec 3, 2022 17:00:00").getTime();
  const [days, hours, minutes, seconds] = useCountdown(WEDDING_DATE);

  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

export default CountdownTimer;
