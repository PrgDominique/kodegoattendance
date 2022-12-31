import { TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Container, Grid, Paper } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { spacing } from '@mui/system';
import Link from '@mui/material/Link';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import InputAdornment from '@mui/material/InputAdornment';

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
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
                    fontWeight: "bold"
                }}
                    variant="contained"
                    href="#contained-buttons"
                    sx={{ mt: 3,
                          width: 100}}>
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
                <h4 style={{
                    color: "#2196f3"
                }}>
                    <Link href="/signup" underline="none">
                        Sign up
                    </Link></h4>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
