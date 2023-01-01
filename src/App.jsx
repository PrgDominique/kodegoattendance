import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Settings from "./views/dashboard/Settings";
import AttendanceHistory from "./views/dashboard/AttendanceHistory";
import Login from "./views/login/Login";
import Signup from "./views/login/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {


  return (
    <>
      <div>
      <AuthContextProvider>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance-history" element={<AttendanceHistory />} />
              <Route path="/Settings" element={<Settings />} />

            </Routes>
      </AuthContextProvider>
       
      </div>
  
    </>
  );
}

export default App;
