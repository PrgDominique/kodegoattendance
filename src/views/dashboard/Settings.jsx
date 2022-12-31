import { Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Settings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [themes, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

return (
 //Your code here
 <ColorModeContext.Provider value={colorMode}>
 <ThemeProvider theme={themes}>
 <CssBaseline />
 <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

 <Typography>Users Settings</Typography>

 </main>
        </div>
            </ThemeProvider>
    </ColorModeContext.Provider>
)
}

export default Settings;