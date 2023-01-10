import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['October', 'November', 'December', 'January', 'February'];

export const data = {
  labels,
  datasets: [
    {
      label: ['Lates'],
      data: [1,5,2,2,1,6,7,8,9,10],
      backgroundColor: 'pink',
    },
    {
      label: ['Absences'],
      data: [1,2,3,1,1,6,7,8,9,10],
      backgroundColor: 'red',
    },
  ],
};
const options = {
    responsive: true,
    plugins:{
      legend:{
        display: false,
      }
    }
  }

export function BarChart() {
  return <Bar data={data} options={options} />;
}

function status(table) {
  // const present = table.filter((obj) => obj.status === "present").length;
  const late = table.filter((obj) => obj.status === "late").length;
  const absent = table.filter((obj) => obj.status === "absent").length;
  return [ late, absent];
  }

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
  }
]