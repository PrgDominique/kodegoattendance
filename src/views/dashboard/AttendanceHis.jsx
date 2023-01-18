import { Typography,useTheme } from "@mui/material";
import DataTable from "../../components/DataTable";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { tokens } from "../../theme";

const AttendanceHis = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);








return (
 //Your code here
 <>

 <Box sx={{
    width: '100%',
    height: 600,
    
 }}>
   <Container maxWidth="lg" sx={{marginLeft: 40}}>
    </Container>
 <DataTable />

 </Box>
 </>
)
}

export default AttendanceHis;