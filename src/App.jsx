import {Routes, Route} from "react-router-dom";
import Dashboard from "./views/dashboard";
import Settings from "./views/dashboard/Settings";
import AttendanceHistory from "./views/dashboard/AttendanceHistory";
import Login from "./views/login/Login";
import Layout from "./Layout";
import Signup from "./views/signup/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <AuthContextProvider>
      

            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<Layout />}>
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/attendance-history" element={<ProtectedRoute>
                <AttendanceHistory />
                </ProtectedRoute>} />
                
              <Route path="/Settings" element={<ProtectedRoute>
                <Settings />
                </ProtectedRoute>} /> 
              </Route>               
            </Routes>
    </AuthContextProvider>
   
  );
}
export default App;