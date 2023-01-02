import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'


const columns = [
  { field: 'id', headerName: 'ID'},
  { field: 'name', headerName: 'Name', width:200},
  { field: 'username', headerName: 'Username', width:180},
  { field: 'email', headerName: 'Email', width:300}
]


function DataTable(){

  const [tableData, setTableData] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  })

  return(
    <Box sx={{height:371, width:'70%', ml:6, mt:2, boxShadow: 5}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={5}
      />
    </Box>
  )
}

export default DataTable