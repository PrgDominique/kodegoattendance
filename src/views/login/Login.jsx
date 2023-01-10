import { TextField, useTheme } from "@mui/material";
import { Container, Grid, Paper } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Logo from "../global/Logo";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import InputAdornment from '@mui/material/InputAdornment';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is authenticated, redirect to dashboard
        navigate("/dashboard");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signIn(email, password);
      console.log("Successfully logged in");
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

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
          <Logo />
          <Paper elevation={5} sx={{ padding: 4 }}>
            <form onSubmit={handleSubmit}>
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
                    <Link href="/signup" underline="none">
                      Sign up
                    </Link>
                  </h4>
                </Grid>
              </Grid>
              {error && <h4>Your email or password is incorrect</h4>}
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
