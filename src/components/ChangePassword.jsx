import { Button, TextField} from "@mui/material";
import React, { useState } from "react";
import { reauthenticateWithCredential,EmailAuthProvider, getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";






const ChangePassword = () => {
  
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [newPassword, setPass] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState("");

    const credential = EmailAuthProvider.credential(
      user.email,
      user.password
    );
    
    

  const reAuth = async (e) => {
    e.preventDefault()
    reauthenticateWithCredential(credential)
      .then(() => {
        
      })
      .then(() => {
        console.log('Password updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating password:', error);
      });
  }

  const handleChange = async (e) => {
    e.preventDefault()
    updatePassword(newPassword).then(() => {
      console.log("Success")
  }).catch((error) => {
    reAuth();
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
    
    
    
    
}
    
   
  return (
    <>
    <form onSubmit={handleChange}>
      <TextField
          sx={{
            marginTop: 10,
            marginLeft: 2,
            width: 400}}
          id="outlined-password-input"
          label="Enter New Password"
          type="password"
          autoComplete="current-password"
        
          onChange={(e) => setPass(e.target.value)}
        />
        <TextField
          sx={{
            marginTop: 4,
            marginLeft: 2,
            width: 400}}
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          
        />

      <Button variant="outlined"
                  color="success"
                  sx={{
                    marginTop: 5,
                    marginLeft: 15,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }} type="submit" >Submit</Button>
      </form>
    </>
  );
}


export default ChangePassword;