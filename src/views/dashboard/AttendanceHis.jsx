import { Box, Toolbar, Typography, useTheme, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { tokens } from "../../theme";
import { PieChart } from "../../components/PieChart";
import { BarChart } from "../../components/BarChart";


const AttendanceHis = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
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
             <Box sx={{mt:5}}>
                 <Typography variant="h3" style={{ marginLeft:25, marginBottom:15}}>Student Time-in & Time-out History</Typography>
                 <TableContainer component={Paper} style={{marginLeft:45, width: 900, borderRadius: '10px'}}>
                     <Table aria-label='simple-table'>
                         <TableHead>
                             <TableRow>
                                 <TableCell>Date</TableCell>
                                 <TableCell>Time in</TableCell>
                                 <TableCell>Time out</TableCell>
                                 <TableCell>Status</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             {
                                 tableData.map(row=>(
                                     <TableRow key={row.id}>
                                         <TableCell>{row.date}</TableCell>                                
                                         <TableCell>{row.time_in}</TableCell>                                
                                         <TableCell>{row.time_out}</TableCell>                                                                 
                                         <TableCell>{row.status}</TableCell>                                 
                                     </TableRow>
                                 ))
                             }
                         </TableBody>
                     </Table>
                 </TableContainer>
               </Box>      
       </>
       )
   }
   
   
   
   export default AttendanceHis
   
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