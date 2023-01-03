import { Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const studentInfo = [  {    firstname: "John",    lastname: "Doe", birthday: "December 19, 1900", mobilenumber: "09123456789", email: "johndoe@gmail.com", password: "a********p" }];

const studentName = studentInfo.map((student) => {
  return student.firstname, student.lastname, student.birthday, student.mobilenumber, student.email, student.password
})


const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 

  return (
    //Your code here
<div>

    <Box>


      <Box sx={{
      backgroundcolor: 'primary-main',
      color: 'white',
      height: '100px',
      width: '100px',
      padding: '29px',
      '&:hover': {
        backgroundcolor: 'primary.main',
      },
    }}
    />



    <Typography>{studentInfo.map(student => {
      
        return (
            <div>
              <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="First Name"
          id="outlined-size-normal"
          defaultValue={student.firstname}
          
        />
        <TextField 
        label="Last Name"
        id="outlined-size-normal" 
        defaultValue={student.lastname} 
        />
        </div>
        <div>
        <TextField 
        label="Birthday"
        id="outlined-size-normal" 
        defaultValue={student.birthday} 
        />
        <TextField 
        label="Mobile Number"
        id="outlined-size-normal" 
        defaultValue={student.mobilenumber}
        />
        </div>
        <div>
        <TextField 
        label="Email"
        id="outlined-size-normal" 
        defaultValue={student.email}
        />
        <TextField 
        label="Password"
        id="outlined-size-normal" 
        defaultValue={student.password}
        />
        </div>

        <Box component="span" sx={{ p: 3, border: '1px dashed grey' }}>
      <Button>Test Button</Button>
        </Box>

        </Box>
        </div>


        )

    })}
    </Typography>
    </Box>
    </div>

  );
};




export default Settings;