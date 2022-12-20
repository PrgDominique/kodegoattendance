import { Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";

const AttendanceHis = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
 //Your code here
 <Typography>Attendance History</Typography>
)
}

export default AttendanceHis;