import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

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
      <Typography>
        <Container fixed>
          <h1>Account Settings</h1>
          <Box my={2}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={4}>
                <Box>
                  <h4>First Name</h4>
                  <TextField
                    label="First Name"
                    id="outlined-size-normal"
                    value={firstName}
                  />
                  <h4>Mobile Number</h4>
                  <TextField
                    label="Mobile Number"
                    id="outlined-size-normal"
                    value={mobileNumber}
                  />
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
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <h4>Last Name</h4>
                  <TextField
                    label="Last Name"
                    id="outlined-size-normal"
                    value={lastName}
                  />
                  <h4>Email</h4>
                  <TextField
                    label="Email"
                    id="outlined-size-normal"
                    value={email}
                  />
                  <h4>Batch</h4>
                  <TextField
                    label="Batch"
                    id="outlined-size-normal"
                    value={batchNo}
                  />
                </Box>
              </Grid>

              <Grid>
                <Box>
                  <Stack spacing={2} direction="row">
                    {edit ? (
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => setEdit(!edit)}
                      >
                        Edit
                      </Button>
                    ) : (
                      <>
                        <Container Fixed>
                          <Grid item xs={6}>
                            <Box>
                              <h4>Password</h4>
                              <TextField
                                fullWidth
                                label="Password"
                                id="fullWidth"
                              />
                            </Box>
                          </Grid>

                          <Grid item xs={6}>
                            <Box>
                              <h4>Confirm Password</h4>
                              <TextField
                                fullWidth
                                label="Confirm Password"
                                id="fullWidth"
                              />
                            </Box>
                          </Grid>
                        </Container>

                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => setEdit(!edit)}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Typography>
    </>
  );
};

export default Settings;
