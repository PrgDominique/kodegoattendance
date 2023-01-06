import { Box, Toolbar, Typography, useTheme, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { tokens } from "../../theme";
import { PieChart } from "../../components/PieChart";
import { BarChart } from "../../components/BarChart";
import DataTable from "../../components/DataTable";




const AttendanceHistory = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

   


    return(
    <>
 <Toolbar>
              <Typography variant="h1" sx={{mb:3}}>
                  Attendance History
              </Typography>
          </Toolbar>
        
          <Box sx={{ ml: 6, width: 900, borderRadius: '10px', boxShadow:3}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{ width:300, marginLeft:3 }}>
                <Typography variant="h4" sx={{mt:2}}>
                  Pie Chart
                </Typography>
                <PieChart />
              </Box>
              <Box sx={{ width:500, mt:3, ml:5}}>
              <Typography variant="h4" sx={{ mt:-2, mb: 6}}>
                  Bar Chart
                </Typography>
                <BarChart />
              </Box>
            </Box>
          </Box>
          <DataTable />
          
    </>
    )
}



export default AttendanceHistory

const tableData = [
  {
    "id": 1,
    "date": "12/01/22",
    "time_in": "8:59am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 2,
    "date": "12/02/22",
    "time_in": "9:15am",
    "time_out": "6:00pm",
    "status": "late"
  },
  {
    "id": 3,
    "date": "12/03/22",
    "time_in": "",
    "time_out": "",
    "status": "absent"
  },
  {
    "id": 4,
    "date": "12/04/22",
    "time_in": "9:01am",
    "time_out": "6:00pm",
    "status": "late"
  },
  {
    "id": 5,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  }
]