import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <AppBar sx={{width: 1840}} position="static">
      <Container>
        <center>
          <img
            src="https://i.ibb.co/bgKPDgx/kodego-logo.png"
            alt="kodego-logo"
            border="0"
            width="120"
            height="auto"
          />
        </center>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: 700,

            textDecoration: "none",
            mb: 1,
          }}
        >
          Attendance Monitoring System
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Logo;
