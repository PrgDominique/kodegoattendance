import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { db, auth } from "../firebase/FirebaseConfig";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";


const columns = [
  { field: "TimeIn", headerName: "TimeIn", width: 200 },
  { field: "TimeOut", headerName: "TimeOut", width: 180 },
  { field: "Status", headerName: "Status", width: 300 },
  { field: "date", headerName: "Date", width: 300 },

];

function DataTable() {
  const [tableData, setTableData] = useState([]);
  const [dataload, setDataLoad] = useState([]);
 


  const userCollectionRef = collection(db, "attendance");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      const userID = auth.currentUser.uid;
      setDataLoad(data.docs.map((doc) => ({ ...doc.data(), id: userID })));
    };
    getUsers();

    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      setDataLoad(snapshot.docs.map((doc) => ({ ...doc.data(), id: userID })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Box sx={{ height: 371, width: "70%", ml: 6, mt: 2, boxShadow: 5 }}>
        <DataGrid rows={dataload} columns={columns} pageSize={5} />
      </Box>
      
    </>
  );
}

export default DataTable;
