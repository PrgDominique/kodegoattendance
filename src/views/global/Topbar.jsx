import { Box, IconButton, useTheme,Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DateTime from "../../components/DateTime";
import React from 'react'

//test
// import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge'
// import { styled } from '@mui/material/styles'
//test end

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // test
  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     backgroundColor: '#44b700',
  //     color: '#44b700',
  //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  //     '&::after': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       borderRadius: '50%',
  //       animation: 'ripple 1.2s infinite ease-in-out',
  //       border: '1px solid currentColor',
  //       content: '""',
  //     },
  //   },
  //   '@keyframes ripple': {
  //     '0%': {
  //       transform: 'scale(.8)',
  //       opacity: 1,
  //     },
  //     '100%': {
  //       transform: 'scale(2.4)',
  //       opacity: 0,
  //     },
  //   },
  // }));
  //test end

  return (
    <React.Fragment>

    <Box display="flex" justifyContent="space-between" p={2}>
     
       <Typography variant="h4" sx={{ color: colors.grey[100] }}>
      <DateTime />
    </Typography>
  

      <Box display="flex">

      {/* test */}
      {/* <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
      >
          <Avatar alt="Diomel Maturan" src="./src/assets/user.png" />
      </StyledBadge> */}
      {/* end test */}

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
       
      </Box>
    </Box>
    </React.Fragment>
  );
};

export default Topbar;
