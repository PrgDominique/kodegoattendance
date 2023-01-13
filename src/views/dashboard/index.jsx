import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { getDatabase, ref, set, update} from "firebase/database";
import { auth } from '../../firebase';
import { useState, useEffect } from "react";

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState('')
  
  const [timeinDisabled, setDisabled] = useState(false);
    const [lastClicked, setLastClicked] = useState('');

    useEffect(() => {
        const storedLastClicked = sessionStorage.getItem('lastClicked');
        if (storedLastClicked) {
            setLastClicked(storedLastClicked);
        }
    }, []);

  const timeIn = async (e) => {
    e.preventDefault();
     
    try {
      const db = getDatabase();
      const userId = auth.currentUser.uid;
      const date = new Date().toLocaleDateString();
      set(ref(db, 'attendance/' + userId + '/' + date), {
        timeIn: new Date().toLocaleTimeString(),
        timeOut: null,
        status: "present",
      });
      console.log("Successfully time in");
      setDisabled(true);
      setLastClicked(date);
      sessionStorage.setItem('lastClicked', date);

    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const timeOut = async (e) => {
    e.preventDefault();
  
    try {
      const db = getDatabase();
      const userId = auth.currentUser.uid;
      const date = new Date().toLocaleDateString();
      update(ref(db, 'attendance/' + userId + '/' + date), {
        timeOut: new Date().toLocaleTimeString(),
      });
      console.log("Successfully time out");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  useEffect(() => {
    const date = new Date().toISOString().slice(0, 10);
    if (date !== lastClicked) {
        setDisabled(false);
    }
}, []);

  return (
    <Box m="100px" ml="35%">  
      <Box display="flex" justifyItems="center" alignItems="center">
        <Box>
          <Button
          onClick={timeIn} disabled={timeinDisabled}
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
          onClick={timeOut}
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
