import {  Routes, Route} from "react-router-dom";
import Dashboard from "./views/dashboard";
import Settings from "./views/dashboard/Settings";
import AttendanceHis from "./views/dashboard/AttendanceHis";
import Login from "./views/login/Login";
import Layout from "./Layout";
import Signup from "./views/signup/Signup";
import { AuthContextProvider } from "./context/AuthContext";



function App() {

  return (
    <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance-history" element={<AttendanceHis />} />
              <Route path="/Settings" element={<Settings />} /> 
              </Route>               
            </Routes>
    </AuthContextProvider>
  );
}
export default App;