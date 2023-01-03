import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Logo = () => {
    return(
        <AppBar position="static">
        <Container>
        <center><img src="https://i.ibb.co/bgKPDgx/kodego-logo.png" alt="kodego-logo" border="0" width="180"  height="auto"/></center>
        <Typography
        variant="h5"
        align="center"

        sx={{
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
          mb: 1
         
        }}
      >
        Attendance Monitoring System
      </Typography>
      </Container>
      </AppBar>
      


    )
}


export default Logo