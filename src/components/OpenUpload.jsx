import { Avatar,Grid,useTheme, Button, Typography} from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from "react";
import {ref as ref_storage,uploadBytes,getDownloadURL} from "firebase/storage"
import { storage } from "../firebase";
import { auth } from "../firebase";





const OpenUpload = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [filename, setFilename] = useState(null)
    const [photo ,setAvatar] = useState()
   

     const handleImageChange = (e) => {
       if (e.target.files[0]) {
         setImage(e.target.files[0]);
       }
        setFilename((e.target.files[0]).name);
        setAvatar(URL.createObjectURL(e.target.files[0]))
       


     };
  
 


  const handleSubmit = () => {
    const userId = auth.currentUser.uid;
    const imageRef = ref_storage(storage, 'users/'+userId+'/'+'image.png');

    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      
      <Avatar sx={{marginTop: 1,
                    marginLeft: 14,
                    height: 200,
                    width: 200}} src={photo}></Avatar>
      
      
      <Button variant="outlined"
                  color="success"
                  component="label"
                  sx={{
                    marginTop: 4,
                    marginLeft: 15,
                    height: 60,
                    width: 180,
                    fontSize: 16,}} 
                   >Browse<input accept="image" type="file" id="fileInput" onChange={handleImageChange} hidden/></Button>
      

      <Button variant="outlined"
                  color="success"
                  sx={{
                    marginTop: 2,
                    marginLeft: 15,
                    height: 60,
                    width: 180,
                    fontSize: 16,
                  }} onClick={handleSubmit}>Submit</Button>
    </>
  );
}


export default OpenUpload;