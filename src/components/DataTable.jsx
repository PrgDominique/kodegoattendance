import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { db, auth } from "../firebase";
import { collection, getDocs, query, where, onSnapshot} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const columns = [
    {field: "user_id", headerName: "ID", width: 200, hide: true },
    {field: "timein", headerName: "Time In", width: 200 },
    {field: "timeout", headerName: "Time Out", width: 200 },
    {field: "date", headerName: "Date", width: 200 },
    {field: "status", headerName: "Status", width: 200 },
  
  
  ];


  

  
  function DataTable() {
    const [dataload, setDataLoad] = useState([]);
    const [error, setError] = useState('')
    const { user } = UserAuth();

    //get the data of attendance from firestore db with the current login user id
    useEffect(() => {
        if(auth.currentUser){
            const userID = auth.currentUser.uid;
            const q = query(collection(db, "attendance"), where("user_id", "==", userID));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDataLoad(data);
                
            });
            return unsubscribe;
        } else {
            console.log("Cannot load the data")
        }
    }, [auth.currentUser]);


return (
<>

<Box sx={{ height: 371, width: "70%", ml: 6, mt: 2, boxShadow: 5 }}>
        <DataGrid rows={dataload}  columns={columns} pageSize={5} />
      </Box>
      
      {error && <div>{error}</div>}
</>

)

  
}

export default DataTable;