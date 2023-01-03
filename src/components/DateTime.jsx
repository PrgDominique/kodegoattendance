import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
const DateTime = () => {
  const [newtime, setNewTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNewTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
   
    <Typography>
      <h1>{newtime.toLocaleTimeString()} | {newtime.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h1>
    </Typography>
   
  );
};

export default DateTime;