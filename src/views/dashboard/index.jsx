import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { db } from "../../firebase/FirebaseConfig";
import { collection, addDoc} from "firebase/firestore";
import { auth } from "../../firebase/FirebaseConfig";
import { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState('')


  const timeIn = async (e) => {
    e.preventDefault();

    try {
      const userID = auth.currentUser.uid;
      await addDoc(collection(db, "attendance"), {
        user_id: userID,
        timein: new Date().toLocaleTimeString(),
        timeout: null,
        status: null,
        date: new Date().toLocaleDateString(),
      });
      console.log("Successfully time in");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Box m="100px" ml="35%">
      <Box display="flex" justifyItems="center" alignItems="center">
        <Box>
          <Button
            onClick={timeIn}
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "30px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginRight: "50px",
            }}
          >
            <ScheduleIcon sx={{ mr: "10px" }} />
            Time In
          </Button>

          <Button 
            sx={{
              backgroundColor: colors.redAccent[700],
              color: colors.grey[100],
              fontSize: "30px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <ScheduleIcon sx={{ mr: "10px" }} />
            Time Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
