import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Typography } from '@mui/material';

function status(table) {
    const present = table.filter((obj) => obj.status === "present").length;
    const late = table.filter((obj) => obj.status === "late").length;
    // const absent = table.filter((obj) => obj.status === "absent").length;
    return [present, late];
    }

function PieChart(){
    const [postid, setpostid] = useState([]);
    const [id, setid] = useState([]);
    const [attendance, setAttendance] = useState([]);

   useEffect (() => {
    const ppostid=[];
    const iid=[];
    const aattendance=[];

    const getStatus = async() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, async(currentUser) => {
            
        const reqData = await fetch (`https://kodegoattendance-e6343-default-rtdb.asia-southeast1.firebasedatabase.app/attendance/${currentUser.uid}.json`);
        const resData = await reqData.json();
    
        for(let res in resData){
            aattendance.push(resData[res]);
            
        }
       
    
        setpostid(ppostid);
        setid(iid);
        setAttendance(status(aattendance));   

        })   
    }
    getStatus();

   },[]);
    
    return(
        <React.Fragment>
            

            <Chart
            type="pie"
            width={400}
            height={400}
            
            series={attendance}

            options={{
                
                colors:['#00FF7F', '#FF0000'],
                noData:{text: "Loading Data"},

                labels:["Present", "Late"]
            }}
            >
            </Chart>
            
        
        </React.Fragment>
    )
}

export default PieChart;