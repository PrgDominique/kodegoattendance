import { TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';


const Signup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
 //Your code here
<Container fixed>
<h1>Sign up</h1>
<h4>Let's get you all setup so you can verify your personal account and begin setting up your profile.</h4>
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
                  
                />
                <h4>Username</h4>
                <TextField
                  type="text"
                  fullWidth
                  label="Username"
                  placeholder="Type your username"
                  variant="outlined"
                />
                <h4>Password</h4>
                <TextField
                  type="password"
                  fullWidth
                  label="Password"
                  placeholder="Type your password"
                  variant="outlined"
                />

                <h4>Batch No.</h4>
                <TextField
                  type="text"
                  label="Batch No."
                  placeholder="Type your batch no."
                  variant="outlined"
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
                />
                <h4>Email</h4>
                <TextField
                  type="email"
                  fullWidth
                  label="Email"
                  placeholder="Type your email"
                  variant="outlined"
                />
                <h4>Confirm Password</h4>
                <TextField
                  type="password"
                  fullWidth
                  label="Password"
                  placeholder="Retype your password to confirm"
                  variant="outlined"
                />
                
        </Grid>

          
      </Grid>
</Container>
 
)
}

export default Signup;