import { Box, Button, useTheme } from "@mui/material";
import DataTable from "../../components/DataTable";

import { tokens } from "../../theme";
import ScheduleIcon from "@mui/icons-material/Schedule";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
  addDoc,
  doc,
  orderBy
  
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState("");
  const [timeInDisabled, setTimeInDisabled] = useState(false);
  const [timeoutDisabled, setTimeoutDisabled] = useState(false);







  const timeIn = async (e) => {
    e.preventDefault();

    try {
      const userID = auth.currentUser.uid;
      await addDoc(collection(db, "attendance"), {
        user_id: userID,
        timein: new Date().toLocaleTimeString(),
        timeout: null,
        status: "present",
        date: new Date().toLocaleDateString(),
      });
      setTimeInDisabled(true);
      setTimeoutDisabled(false);
      console.log("Successfully time in");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  //create function timeout and update the timeout null to the current time in firebase firestore
  const timeout = async (e) => {
    e.preventDefault();

    try {
      const userID = auth.currentUser.uid;
      const q = query(
        collection(db, "attendance"),
        where("user_id", "==", userID),
        where("date", "==", new Date().toLocaleDateString()).orderBy("timein", "desc")
      );
     
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
          timeout: new Date().toLocaleTimeString(),
        });
      });
      setTimeoutDisabled(true);
      setTimeInDisabled(false);

      console.log("Successfully time out");
    } catch (e) {
      setError(e.message);
      console.log("failed to timeout")
    }
  };






  return (
    <Box m="100px" ml="35%">
      <Box display="flex" justifyItems="center" alignItems="center">
        <Box>
          <Button
            onClick={timeIn}
            disabled={timeInDisabled}
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
          onClick={timeout}
          disabled={timeoutDisabled}
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
        <DataTable />
    </Box>
  );
};

export default Main;
