import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { db, auth } from "../firebase/FirebaseConfig";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";


const columns = [
  { field: "timein", headerName: "TimeIn", width: 200 },
  { field: "timeout", headerName: "TimeOut", width: 180 },
  { field: "status", headerName: "Status", width: 300 },
  { field: "date", headerName: "Date", width: 300 },

];

function DataTable() {
  const [tableData, setTableData] = useState([]);
  const [dataload, setDataLoad] = useState([]);
  const [error, setError] = useState('')

 


  const userCollectionRef = collection(db, "attendance");


  useEffect(() => {

    try {
      const getUsers = async () => {
        const data = await getDocs(userCollectionRef)
        setDataLoad(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }
      getUsers()
  
      const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
        setDataLoad(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      }
      )
      return () => unsubscribe()

    } catch (e) {
      setError(e)
      console.log(error)
    }


}, [])

  return (
    <>
      <Box sx={{ height: 371, width: "70%", ml: 6, mt: 2, boxShadow: 5 }}>
        <DataGrid rows={dataload} columns={columns} pageSize={5} />
      </Box>
      
      {error && <div>{error}</div>}
    </>
  );
}

export default DataTable;
