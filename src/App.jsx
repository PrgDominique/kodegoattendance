import { Routes, Route } from "react-router-dom";
import { useState } from "react"

import Dashboard from "./views/dashboard";
import Settings from "./views/dashboard/Settings";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AttendanceHistory from "./views/dashboard/AttendanceHistory";
import Login from "./views/login/Login";
import Signup from "./views/login/Signup";






function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
        <CssBaseline />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance-history" element={<AttendanceHistory/>} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
    
    </>
  );
}

export default App;
