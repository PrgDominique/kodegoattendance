import { Typography,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';



const studentInfo = [  {    firstname: "John",    lastname: "Doe", birthday: "December 19, 1900", mobilenumber: "09123456789", email: "johndoe@gmail.com", batch: "WD29" }];

const studentName = studentInfo.map((student) => {
  return student.firstname, student.lastname, student.birthday, student.mobilenumber, student.email, student.batch
})


const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 

  return (
    //Your code here


    <Container Fluid>
<div>
<Box>

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
        label="Batch"
        id="outlined-size-normal" 
        defaultValue={student.batch}
        />
        </div>


    <Box>
      <div>
      <TextField 
      fullWidth label="Password" 
      id="fullWidth" 
      placeholder="sx"
      sx={{
        width: { sm: 200, ms: 300 },
        "& .MuiInputbase-root": {
          height: 80
        },
        mb: 2
      }}
      />
      </div>
      <div>
      <TextField fullWidth label="Confirm Password" id="fullWidth" />
      </div>
      
    </Box>
  


        </Box>
        </div>


        )

    })}
    </Typography>
    </Box>
    </div>
</Container>


  );
};




export default Settings;