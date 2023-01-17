import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import Logo from "./views/global/Logo";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <>

<Logo />
      <Typography>
        <Box>
          <Container maxWidth="lg">
            <Box sx={{ justifyContent: "center", alignContent: "center" }}>
              <h1 className="noPageh1">Error 404</h1>
              <h2 className="noPageh2">Uh-oh! Page not found</h2>
              <h2 onClick={() => navigate("/")} className="GoHome">Go to Homepage</h2>
            </Box>
          </Container>
        </Box>
      </Typography>
    </>
  );
};

export default NoPage;
