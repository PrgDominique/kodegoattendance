import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { user } = UserAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [birthDate, setBirthday] = useState(dayjs(""));
  const [edit, setEdit] = useState(true);

  const handleChange = (newValue) => {
    setBirthday(newValue);
  };

  useEffect(() => {
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setFirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
        setBatchNo(doc.data().batchNo);
        setEmail(doc.data().email);
        setMobileNumber(doc.data().mobileNumber);
        setBirthday(doc.data().birthDate);
      });
    });
    return unsubscribe;
  }, [user.email]);

  return (
    //Your code here
    <>
      <Typography variant="h4">
        <Box
          sx={{
            width: 1200,
            height: 800,
            margin: "auto",
          }}
        >
          {edit ? (
            <Container maxWidth="lg" sx={{}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <h4>First Name</h4>
                  <TextField
                    label="First Name"
                    id="outlined-size-normal"
                    value={firstName}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Last Name</h4>
                  <TextField
                    label="Last Name"
                    id="outlined-size-normal"
                    value={lastName}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Mobile Number</h4>
                  <TextField
                    label="Mobile Number"
                    id="outlined-size-normal"
                    value={mobileNumber}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Email</h4>
                  <TextField
                    label="Email"
                    id="outlined-size-normal"
                    value={email}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Birth date</h4>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Birthdate"
                      inputFormat="MM/DD/YYYY"
                      value={birthDate}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                      disabled
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Batch</h4>
                  <TextField
                    label="Batch"
                    id="outlined-size-normal"
                    value={batchNo}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>
              </Grid>
              <Container>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => setEdit(!edit)}
                  sx={{
                    marginTop: 10,
                    marginLeft: 5,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }}
                >
                  Edit Account
                </Button>
              </Container>
            </Container>
          ) : (
            <Container maxWidth="lg" sx={{}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <h4>First Name</h4>
                  <TextField
                    label="First Name"
                    id="outlined-size-normal"
                    value={firstName}
                    sx={{ width: 250 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Last Name</h4>
                  <TextField
                    label="Last Name"
                    id="outlined-size-normal"
                    value={lastName}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Mobile Number</h4>
                  <TextField
                    label="Mobile Number"
                    id="outlined-size-normal"
                    value={mobileNumber}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Email</h4>
                  <TextField
                    label="Email"
                    id="outlined-size-normal"
                    value={email}
                    sx={{ width: 250 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Birth date</h4>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="Birthdate"
                      inputFormat="MM/DD/YYYY"
                      value={birthDate}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Batch</h4>
                  <TextField
                    label="Batch"
                    id="outlined-size-normal"
                    value={batchNo}
                    sx={{ width: 250 }}
                  />
                </Grid>
              </Grid>
              <Container>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => setEdit(!edit)}
                  sx={{
                    marginTop: 10,
                    marginLeft: 5,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setEdit(!edit)}
                  sx={{
                    marginTop: 10,
                    marginLeft: 5,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }}
                >
                  Cancel
                </Button>
              </Container>
            </Container>
          )}
        </Box>
      </Typography>
    </>
  );
};

export default Settings;
