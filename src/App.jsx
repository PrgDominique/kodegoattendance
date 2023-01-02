import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/index";
import Settings from "./views/dashboard/Settings";
import AttendanceHistory from "./views/dashboard/AttendanceHistory";
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";
import Layout from "./Layout";
import { AuthContextProvider } from "./context/AuthContext";


function App() {


  return (
    <>
      <div>
      <AuthContextProvider>


            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance-history" element={<AttendanceHistory />} />
              <Route path="/Settings" element={<Settings />} /> 
              </Route>               
            </Routes>
      </AuthContextProvider>
       
      </div>
  
    </>

   
  );
}
export default App;