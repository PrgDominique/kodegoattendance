import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot, updateDoc, doc, setDoc } from "firebase/firestore";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { user } = UserAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [batchID, setBatchID] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [birthDate, setBirthday] = useState("");
  const [edit, setEdit] = useState(true);









 
  

  useEffect(() => {
    if(user && user.email) {
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setFirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
        setBatchID(doc.data().batchID);
        setEmail(doc.data().email);
        setMobileNumber(doc.data().mobileNumber);
        setBirthday(doc.data().birthDate);
      });
    });
    return unsubscribe;
  } else {
    console.log("cannot find the user")
  }

  }, [user?.email]);

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
                  <h4>Birth Date</h4>
                  <TextField
                    label="Date of Birth"
                    id="outlined-size-normal"
                    value={birthDate}
                    sx={{ width: 250 }}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Batch</h4>
                  <TextField
                    label="Batch"
                    id="outlined-size-normal"
                    value={batchID}
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
              <form onSubmit={handleUpdate}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <h4>First Name</h4>
                  <TextField
                    label="First Name"
                    id="outlined-size-normal"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    sx={{ width: 250 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Last Name</h4>
                  <TextField
                    label="Last Name"
                    id="outlined-size-normal"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Mobile Number</h4>
                  <TextField
                    label="Mobile Number"
                    id="outlined-size-normal"
                    onChange={(e) => setMobileNumber(e.target.value)}
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
                    disabled
                    sx={{ width: 250 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <h4>Birth Date</h4>
                  <TextField
                    label="Date of Birth"
                    id="outlined-size-normal"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthDate}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <h4>Batch</h4>
                  <TextField
                    label="Batch"
                    id="outlined-size-normal"
                    onChange={(e) => setBatchID(e.target.value)}
                    value={batchID}
                    sx={{ width: 250 }}
                  />
                </Grid>
              </Grid>
              <Container>
                <Button
                  variant="outlined"
                  type="submit"
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
                </form>
            </Container>
          )}
        </Box>
      </Typography>
    </>
  );
};

export default Settings;
