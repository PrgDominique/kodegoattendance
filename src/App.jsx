import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import Dashboard from "./views/dashboard";
import Settings from "./views/dashboard/Settings";
import AttendanceHis from "./views/dashboard/AttendanceHis";
import Login from "./views/dashboard/Login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance-history" element={<AttendanceHis />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
