import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import TextField from '@mui/material/TextField';




const Settings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const studentInfo = [{
        name: "John Doe",
    }]

    const studentName = studentInfo.map((student) => {
        return student.name;
    })


return (
 //Your code here




 <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue={studentName}
          size="medium"
        />


)
}

export default Settings;