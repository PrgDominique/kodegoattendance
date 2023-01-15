import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ScheduleIcon from "@mui/icons-material/Schedule";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  addDoc,
  
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState("");
  const [timeInDisabled, setTimeInDisabled] = useState(false);


  //get firstName and lastName of firebase realtime database




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
      setTimeInDisabled(true);
      console.log("Successfully time in");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const [timeinDisabled, setDisabled] = useState(false);
  const [lastClicked, setLastClicked] = useState("");

  useEffect(() => {
    const storedLastClicked = sessionStorage.getItem("lastClicked");
    if (storedLastClicked) {
      setLastClicked(storedLastClicked);
    }
  }, []);

  return (
    <Box m="100px" ml="35%">
      <Box display="flex" justifyItems="center" alignItems="center">
        <Box>
          <Button
            onClick={timeIn}
            disabled={timeinDisabled}
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

export default Main;
