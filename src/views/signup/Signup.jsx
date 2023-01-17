import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Grid, Paper,TextField} from "@mui/material";
import Button from '@mui/material/Button';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../../firebase';
import Logo from '../global/Logo';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [birthDate, setBirthDate] = useState((""))
    const [batchID, setBatchID] = useState("")

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          // User is authenticated, redirect to dashboard
          navigate("/dashboard");
        }
      });
  
      return unsubscribe;
    }, [navigate]);
 
    const handleSignup = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            
                const db = getDatabase();
                const userId = auth.currentUser.uid;
                set(ref(db, 'users/' + userId), {
                  userId,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  mobile: mobileNumber,
                  birthDate: birthDate,
                  batchID: batchID,
                });
          
            navigate("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    //give me clickable link that will take me to the login page if i already have an account
    <>
    
    <Container fixed>
      <Logo />
      <h1>Sign up</h1>
      <h4>
        Let's get you all setup so you can verify your personal account and
        begin setting up your profile.
      </h4>
      
      <form onSubmit={handleSignup}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <h4>First Name</h4>
            <TextField
              type="text"
              fullWidth
              label="First Name"
              placeholder="Type your first name"
              variant="outlined"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <h4>Batch No.</h4>
            <TextField
              type="text"
              label="Batch ID."
              placeholder="Type your batch ID."
              variant="outlined"
              value={batchID}
              onChange={(e) => setBatchID(e.target.value)}
            />
            <Grid item sm={12}>

<h3>Already have an account?  <NavLink to="/"> Login</NavLink></h3>
</Grid>
          </Grid>
          <Grid item xs={6}>
            <h4>Last Name</h4>
            <TextField
              type="text"
              fullWidth
              label="Last Name"
              placeholder="Type your last name"
              variant="outlined"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Grid item xs={6}>
            <h4>Birth Date</h4>
            <TextField
              type="text"
              fullWidth
              label="mm/dd/yyyy"
              placeholder="Type your Birth Date"
              variant="outlined"
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

      
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
}
 
export default Signup