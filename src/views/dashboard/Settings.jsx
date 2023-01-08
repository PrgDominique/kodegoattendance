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
import { useState } from "react";

const studentInfo = [
  {
    firstname: "John",
    lastname: "Doe",
    birthday: "December 19, 1900",
    mobilenumber: "09123456789",
    email: "johndoe@gmail.com",
    batch: "WD29",
  },
];

const studentName = studentInfo.map((student) => {
  return (
    student.firstname,
    student.lastname,
    student.birthday,
    student.mobilenumber,
    student.email,
    student.batch
  );
});

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState(dayjs(""));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const birthDate = studentInfo.map((student) => {
     return student.birthday
  });

  return (
    //Your code here
    <Typography>
      {studentInfo.map((student) => {
        return (
          <Container Fixed>
            <h1>Account Settings</h1>
            <Box my={2}>
              <Grid container Spacing={3}>
                <Grid item xs={6} md={4}>
                  <Box>
                    <h4>First Name</h4>
                    <TextField
                      label="First Name"
                      id="outlined-size-normal"
                      defaultValue={student.firstname}
                    />
                    <h4>Mobile Number</h4>
                    <TextField
                      label="Mobile Number"
                      id="outlined-size-normal"
                      defaultValue={student.mobilenumber}
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
                      defaultValue={student.lastname}
                    />
                    <h4>Email</h4>
                    <TextField
                      label="Email"
                      id="outlined-size-normal"
                      defaultValue={student.email}
                    />
                    <h4>Batch</h4>
                    <TextField
                      label="Batch"
                      id="outlined-size-normal"
                      defaultValue={student.batch}
                    />
                  </Box>
                </Grid>

                <Container Fixed>
                  <Grid item xs={6}>
                    <Box>
                      <h4>Password</h4>
                      <TextField fullWidth label="Password" id="fullWidth" />
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


              <Container >
                <Grid>
                  <Box>
                    <Stack spacing={2} direction="row">
                      <Button variant="outlined" color="success">
                        Test Button
                      </Button>
                    </Stack>
                  </Box>
                </Grid>
              </Container>
              </Grid>
            </Box>
          </Container>
        );
      })}
    </Typography>
  );
};

export default Settings;
