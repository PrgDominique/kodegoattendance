import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, useTheme } from "@mui/material";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Typography>
      
        <Box
          sx={{
            width: 1200,
            height: 600,
            marginTop: 10,
            marginLeft: 30,
            backgroundColor: 'primary.dark',
            display: 'flex'
          }}
        ><Container maxWidth="lg" >
          <Box sx={{justifyContent: 'center', alignContent: 'center'}}>

              <h1  className="noPageh1">Error 404</h1>
       
              <h2 className="noPageh2">Uh-oh! Page not found</h2>

              <button onClick={() => navigate("/")}>Go to Homepage</button>
            
          </Box>
        
          </Container>
        </Box>
      
    </Typography>
    </>
  );
};

export default NoPage;
