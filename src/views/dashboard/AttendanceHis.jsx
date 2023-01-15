import { Typography,useTheme } from "@mui/material";
import DataTable from "../../components/DataTable";
import { tokens } from "../../theme";

const AttendanceHis = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
 //Your code here
 <>
 <DataTable />
 </>
)
}

export default AttendanceHis;