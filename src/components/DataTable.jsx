import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {  auth } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { getDatabase, ref, set, equalTo, child,get, orderByChild } from "firebase/database";


const columns = [
    {field: "user_id", headerName: "ID", width: 200, hide: true },
    {field: "timeIn", headerName: "Time In", width: 200 },
    {field: "timeOut", headerName: "Time Out", width: 200 },
    {field: "status", headerName: "Status", width: 200 },
    {field: "date", headerName: "Date", width: 200 }
  ];


  

  
  function DataTable() {
    const [dataload, setDataLoad] = useState([]);
    const [error, setError] = useState('')
    const { user } = UserAuth();
    const db = getDatabase();

   
    useEffect(() => {
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const userRef = ref(db, `attendance/${userId}`);
            get(userRef).then((snapshot) => {
              if (snapshot.exists()) {
                setDataLoad(Object.values(snapshot.val()));
              } else {
                console.log("No data available");
              }
            });
          } else {
            console.log("No user is signed in.")
          }
    
      }, [auth.currentUser]);

   


return (
<>

<Box sx={{ height: 371, width: "70%", ml: 6, mt: 2, boxShadow: 5 }}>
        <DataGrid rows={dataload}  columns={columns} pageSize={5} getRowId={row => `${row.user_id}-${row.timeIn}`} />
      </Box>
      
      {error && <div>{error}</div>}
</>

)

  
}

export default DataTable;