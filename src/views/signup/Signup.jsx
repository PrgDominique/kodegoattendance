import { TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { spacing } from "@mui/system";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import Logo from "../global/Logo";
import Button from '@mui/material/Button';

const Signup = () => {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [birthDate, setBirthDate] = useState((""));
  const [batchNo, setBatchNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, redirect to dashboard
        navigate("/dashboard");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      setErrPassword("Passwords do not match");
      return;
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !mobileNumber ||
      !batchNo ||
      !birthDate
    ) {
      console.error("All fields are required.");
      setError("All fields are required");
      return;
    }

    try {
      const user = await createUser(email, password);
      console.log("Successfully created new user");
      const userID = user.user.uid;
      await addDoc(collection(db, "users"), {
        userID,
        email,
        firstName,
        lastName,
        mobileNumber,
        birthDate,
        batchNo,
      });
      navigate("/login");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    //Your code here
    <Container fixed>
      <Logo />
      <h1>Sign up</h1>
      <h4>
        Let's get you all setup so you can verify your personal account and
        begin setting up your profile.
      </h4>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <h4>First Name</h4>
            <TextField
              type="text"
              fullWidth
              label="First Name"
              placeholder="Type your first name"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              className="m-5"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <h4>Mobile Number</h4>
            <TextField
              type="text"
              fullWidth
              label="Mobile Number"
              placeholder="Type your Mobile Number"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <h4>Password</h4>
            <TextField
              type="password"
              fullWidth
              label="Password"
              placeholder="Type your password"
              variant="outlined"
              {...(errpassword && { error: true, helperText: errpassword })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <h4>Batch No.</h4>
            <TextField
              type="text"
              label="Batch No."
              placeholder="Type your batch no."
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              value={batchNo}
              onChange={(e) => setBatchNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <h4>Last Name</h4>
            <TextField
              type="text"
              fullWidth
              label="Last Name"
              placeholder="Type your last name"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <h4>Email</h4>
            <TextField
              type="email"
              fullWidth
              label="Email"
              placeholder="Type your email"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Confirm Password</h4>
            <TextField
              type="password"
              fullWidth
              label="Password"
              placeholder="Retype your password to confirm"
              variant="outlined"
              {...(errpassword && { error: true, helperText: errpassword })}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Grid item xs={6}>
            <h4>Birth Date</h4>
            <TextField
              type="text"
              fullWidth
              label="Birth Date"
              placeholder="Type your Birth Date"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            </Grid>

            <Grid item>
            <Button
            type="submit"
              style={{
                borderRadius: 5,
                backgroundColor: "#2196f3",
                padding: "18px, 36px",
                fontsize: "18px",
                fontWeight: "bold",

                
                
              }}
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
              
            >
              Sign up
            </Button>
          </Grid>

            {/* <button>Sign Up</button> */}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Signup;
