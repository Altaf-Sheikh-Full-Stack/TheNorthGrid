import { useEffect, useState } from "react";
import Text from "../../../system/text/text";

function CountDown() {
  const targetDate = new Date("june 30, 2026 15:37:25").getTime();

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return "EXPIRED";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text size="semiMedium" font="playful">Registration ends in -  {timeLeft}</Text>
  );
}

export default CountDown;