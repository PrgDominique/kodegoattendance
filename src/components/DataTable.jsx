import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { db } from "../firebase/FirebaseConfig";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  { field: "username", headerName: "Username", width: 180 },
  { field: "email", headerName: "Email", width: 300 },
];

function DataTable() {
  const [tableData, setTableData] = useState([]);
  const [dataload, setDataLoad] = useState([]);

  const userCollectionRef = collection(db, "Attendance");
  const getData = () => {
    return 
  }
  // const getDatainfo = () => {
  //   return {dataload.TimeIn}
  // }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setDataLoad(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();

    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      setDataLoad(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
