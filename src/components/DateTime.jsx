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
      {newtime.toLocaleTimeString()} {newtime.toLocaleDateString()}
    </Typography>
   
  );
};

export default DateTime;