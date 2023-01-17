import { useContext, useEffect, useState } from "react";
import { Box, IconButton, useTheme,Typography } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";

const DateTime = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [newtime, setNewTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNewTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
   
    <Typography variant="h3" sx={{ color: colors.grey[200] }}>
      {newtime.toLocaleTimeString()} | {newtime.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
    </Typography>
   
  );
};

export default DateTime;