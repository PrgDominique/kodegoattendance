import React, {useState} from 'react';
import { Container, Grid, Paper,TextField} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <div>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "80vh" }}
          >
              <Paper elevation={5} sx={{ padding: 4 }}>
              <form onSubmit={handleLogin}>
                <Grid container direction="column" spacing={0.5}>
                  <Grid item>
                    <h1>Log in</h1>
                  </Grid>
                  <Grid item>
                    <h4>Username</h4>
                    <TextField
                      type="email"
                      fullWidth
                      label="Username"
                      placeholder="Email address"
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <h4>Password</h4>
                    <TextField
                      type="password"
                      fullWidth
                      label="Password"
                      placeholder="Password"
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                      // InputProps={{
                      //   endAdornment:(
                      //       <InputAdornment position="end">
                      //           <IconButton
                      //           aria-label="toggle password"
                      //           edge="end">
                      //           <VisibilityIcon/>
                      //           </IconButton>
                      //       </InputAdornment>
                      //   )
                      // }}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        borderRadius: 5,
                        backgroundColor: "#2196f3",
                        padding: "18px, 36px",
                        fontsize: "18px",
                        fontWeight: "bold",
                      }}
                      variant="contained"
                      type="submit"
                      sx={{ mt: 3, width: 100 }}
                    >
                      LOGIN
                    </Button>
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item>
                    <h4
                      style={{
                        color: "#2196f3",
                      }}
                    >
                      <NavLink to="/signup">
                        Sign up
                      </NavLink>
                    </h4>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Container>
      </div>
    );
}
 
export default Login