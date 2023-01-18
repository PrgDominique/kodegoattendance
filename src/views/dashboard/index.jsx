import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { get, getDatabase, onValue, ref, set, update,child} from "firebase/database";
import { auth } from '../../firebase';
import { useState, useEffect } from "react";
import moment from 'moment';
import DateTime from '../../components/DateTime';

const Main = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState('')
  

  const timeIn = async (e) => {
    e.preventDefault();
     
      const db = getDatabase();
      const userId = auth.currentUser.uid;
      const date = moment().format('MM-DD-YYYY');
      const attendanceRef = ref(db, 'attendance/');

      // time in if late or present 
      const today = new Date().toLocaleDateString();
      const timeIn = new Date(`${today} 8:00:00`);
      const check = new Date() < timeIn;
      let status = '';
      if (check) {
        status = 'Present';
      }else if (!check){
        status = 'Late';
      }else {
        status = 'Absent';
      }
      // end
      get(child(attendanceRef, `${userId}/${date}`)).then((snapshot) => {
        if (snapshot.exists()) {
          alert("You already time in");
        } else {
          set(ref(db, 'attendance/' + userId + '/' + date), {
            timeIn: new Date().toLocaleTimeString(),
            timeOut: null,
            status: status,
            date: new Date().toLocaleDateString()
          });
          alert("Successfully time in");
        }
      }).catch((error) => {
        console.error(error);
      });
  };

  const timeOut = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const date = moment().format('MM-DD-YYYY');
    const attendanceRef = ref(db, 'attendance/');
    
    get(child(attendanceRef, `${userId}/${date}`)).then((snapshot) => {
      if(snapshot.exists()){
       if (snapshot.val().hasOwnProperty('timeOut')) {
          alert("You already time out");
       }  
       else if(snapshot.val().hasOwnProperty('timeIn')){
          update(ref(db, 'attendance/' + userId + '/' + date), {
          timeOut: new Date().toLocaleTimeString()
          });
         alert("Successfully time out");
       }
      }
      else{
        alert("You need to time in first");
      }
   }).catch((error) => {
     console.error(error);
   });
  };


  return (
    <Box m="100px" ml="35%" sx={{marginTop: 30}}>  
      <Box sx={{marginTop: 1}}>
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
