import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <Typography variant="h1">
      
        <Box
          sx={{
            width: 1200,
            height: 800,
            margin: "auto",
            backgroundColor: 'primary.dark'
          }}
        ><Container maxWidth="lg" >
          <Box sx={{ margin: "auto"}}>
          
            <div>
              <h1>404</h1>
              <h2>Uh-oh! Page not found</h2>

              <button onClick={() => navigate("/")}>Go to Homepage</button>
            </div>
          
          </Box>
          </Container>
        </Box>
      
    </Typography>
  );
};

export default NoPage;
