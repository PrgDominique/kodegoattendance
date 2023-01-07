import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { db, auth } from "../firebase/FirebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 200, hide: true },
  { field: "timein", headerName: "Time In", width: 200 },
  { field: "timeout", headerName: "Time Out", width: 200 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
];

function TimeButton() {
  const [dataload, setDataLoad] = useState([]);
  const [error, setError] = useState("");

  const attendance_records = query(
    collection(db, "attendance"),
    where("user_id", "==", auth.currentUser.uid)
  );

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const data = await getDocs(attendance_records);
        setDataLoad(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    };

    getAttendance();

    const unsubscribe = onSnapshot(
      query(
        collection(db, "attendance"),
        where("user_id", "==", auth.currentUser.uid)
      ),
      (snapshot) => {
        // update the state with the latest data from the snapshot
        setDataLoad(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Box sx={{ height: 371, width: "70%", ml: 6, mt: 2, boxShadow: 5 }}>
        <DataGrid rows={dataload} columns={columns} pageSize={5} />
      </Box>

      {error && <div>{error}</div>}
    </>
  );
}

export default TimeButton;
