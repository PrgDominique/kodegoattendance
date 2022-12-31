import { useState } from "react";
import { NavLink } from "react-router-dom";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import Settings from "./views/dashboard/Settings";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AttendanceHistory from "./views/dashboard/AttendanceHistory";







const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
        <NavLink to="/attendance-history" element={<AttendanceHistory />} />
        <NavLink to="/settings" element={<Settings />} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
}

export default Dashboard;
