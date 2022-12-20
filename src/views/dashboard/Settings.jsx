import { Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Settings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
 //Your code here
 <Typography>Users Settings</Typography>
)
}

export default Settings;