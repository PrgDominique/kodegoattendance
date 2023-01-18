import React from "react";
import { Typography, useTheme, Modal } from "@mui/material";
import { tokens } from "../../theme";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, child, get, update } from "firebase/database";
import { auth } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import OpenUpload from "../../components/OpenUpload";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 20,
  p: 4,
};



const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [batchID, setBatchID] = useState("");
  const [edit, setEdit] = useState(true);
  const fileInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const db = getDatabase();
  const {User} = UserAuth();


  const handleUpdate = (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const userRef = ref(db, "users");
    update(child(userRef, `${userId}`), {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      birthDate: birthDate,
    });

    setEdit(!edit);
    console.log("Updated");
  };

  useEffect(() => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const userRef = ref(db, "users");
      get(child(userRef, `${userId}`)).then((snapshot) => {
        setFirstName(snapshot.val().firstName);
        setLastName(snapshot.val().lastName);
        setMobileNumber(snapshot.val().mobile);
        setEmail(snapshot.val().email);
        setBirthDate(snapshot.val().birthDate);
        setBatchID(snapshot.val().batchID);
      });
    } else {
      console.log("No user is signed in.");
    }
  }, [auth.currentUser]);

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
                    value={mobile}
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

               

                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleOpen}
                  sx={{
                    marginTop: 10,
                    marginLeft: 10,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }}
                >
                  Upload Photo
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <OpenUpload/>
                  </Box>
                </Modal>

                <Button
                  variant="outlined"
                  color="success"
                  sx={{
                    marginTop: 10,
                    marginLeft: 10,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }}
                >
                  Change Password
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
                      value={mobile}
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
                      onChange={(e) => setBirthDate(e.target.value)}
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
                      disabled
                      sx={{ width: 250 }}
                    />
                  </Grid>

                </Grid>
                <Container>
                  <Button
                    variant="outlined"
                    type="submit"
                    color="success"
                    onClick={handleUpdate}
                    sx={{
                      marginTop: 10,
                      marginLeft: -3,
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
                    Close
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
