import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart(){
  const [ userData, setUserData] = useState({
    labels : ['Present', 'Lates', 'Absences'],
   
    datasets: [{
      label: "Number of Days",
      data: status(tableData),
      backgroundColor: [
        'green',
        'pink',
        'red'
      ],
      borderColor: [
        'green',
        'pink',
        'red'
      ]
    }]
  })
  const options = {
    responsive: true,
    plugins:{
      legend:{
        display: true,
        position: "right"
      }
    }
  }
  return <Pie data={userData} options={options}/>
}

function status(table) {
  const present = table.filter((obj) => obj.status === "present").length;
  const late = table.filter((obj) => obj.status === "late").length;
  const absent = table.filter((obj) => obj.status === "absent").length;
  return [present, late, absent];
  }







//sample data
const tableData = [
  {
    "id": 1,
    "date": "12/01/22",
    "time_in": "8:59am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 2,
    "date": "12/02/22",
    "time_in": "9:15am",
    "time_out": "6:00pm",
    "status": "late"
  },
  {
    "id": 3,
    "date": "12/03/22",
    "time_in": "",
    "time_out": "",
    "status": "absent"
  },
  {
    "id": 4,
    "date": "12/04/22",
    "time_in": "9:01am",
    "time_out": "6:00pm",
    "status": "late"
  },
  {
    "id": 5,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 6,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 7,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 8,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 9,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  },
  {
    "id": 10,
    "date": "12/05/22",
    "time_in": "8:51am",
    "time_out": "6:00pm",
    "status": "present"
  }
]

