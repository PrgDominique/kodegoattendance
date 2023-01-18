import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { auth } from "../../firebase";
import { getDatabase, ref as ref_database, set, equalTo, child,get } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import { ref as ref_storage,getDownloadURL,getStorage} from "firebase/storage";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [batchID, setBatchID] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();
  const { logout } = UserAuth();
  const storage = getStorage();
  
  
  const [url, setUrl] = useState();
 
  

  const handleLogout = async () => {
    try {
      await logout();
     
      console.log("Signed out successfully");
    } catch (e) {
      console.log(e.message);
    }
  };

  // get firstName and lastName of firebase realtime database

  useEffect(() => {
    if (auth.currentUser) {
      
      
      const userId = auth.currentUser.uid;
      const userRef = ref_database(db, 'users');
      get(child(userRef, `${userId}`)).then((snapshot) => {
        setFirstName(snapshot.val().firstName);
        setLastName(snapshot.val().lastName);
        setBatchID(snapshot.val().batchID);
      });

      const userID = auth.currentUser.uid;
      const imageRef = ref_storage(storage, 'users/'+userID+'/'+'image.png');
      getDownloadURL(imageRef)
      .then((url) => {
        setUrl(url);
        console.log(url);
      }).catch((error) => {
        console.log(error.message, "error getting the image url");
      });



    } else {
      console.log("No user is signed in.")
    }

  }, [auth.currentUser]);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Kodego Attendance
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                  alt=""
                  src={url}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                  sx={{ width: 150, height: 150 }}
                />
              </Box>
              <Box textAlign="center" >
                <Box  sx={{marginTop: 2}}>

                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {firstName} {lastName}
                </Typography>
                </Box>
                <Box sx={{marginTop: 2}}>

                <Typography variant="h2" color={colors.greenAccent[500]}>
                 {batchID}
                </Typography>
                </Box>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Attendance History"
              to="/attendance-history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              icon={<LogoutOutlinedIcon />}
              setSelected={handleLogout}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
