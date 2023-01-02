import { TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

import { useNavigate } from "react-router-dom";


const Signup = () => {
    const { createUser } = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [batchNo, setBatchNo] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
          console.error('Passwords do not match');
            return
        }

        if (!firstName || !lastName || !email || !password || !confirmPassword || !username || !batchNo) {
          console.error("All fields are required.");
          return;
        }

        try {
            const user = await createUser(email, password)
            console.log('Successfully created new user');
            await firebase.firestore.collection('users').add({
          uid: user.uid,
          email: user.email,
          firstName,
          lastName,
          username,
          batchNo,
          
        })
        navigate('/dashboard')
        } catch(e) {
            setError(e.message)
            console.log(e.message);

        }
      }



return (
 //Your code here
<Container fixed>
<h1>Sign up</h1>
<h4>Let's get you all setup so you can verify your personal account and begin setting up your profile.</h4>
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
                  className="m-5"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  
                />
                <h4>Username</h4>
                <TextField
                  type="text"
                  fullWidth
                  label="Username"
                  placeholder="Type your username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  label="Batch No."
                  placeholder="Type your batch no."
                  variant="outlined"
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
                
                <button>Sign Up</button>
                {error && <p>{error}</p>}
        </Grid>

          
      </Grid>
</form>
</Container>
 
)
}

export default Signup;