import React, { useEffect, useState } from 'react';
import TableData from './TableData';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = () => {
    axios.get("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }

  const deleteHandler = (id) => {
    axios.delete(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`)
    .then(() => getEmployeeData())
  }

  const editHandler = (id,FirstName,DOB,StartDate,EndDate,Description) => {
            localStorage.setItem("id",id)
            localStorage.setItem("FirstName",FirstName);
            localStorage.setItem("DOB",DOB);
            localStorage.setItem("StartDate",StartDate)
            localStorage.setItem("EndDate",EndDate)
            localStorage.setItem("Description",Description)
            console.log("edit handler");
            navigate('/update')
  }


  console.log(employeeData, 'employeeData');

  return (
    <>
      <TableData getEmployeeData={employeeData} deleteHandler={deleteHandler} editHandler={editHandler}/>
      <Button  variant="contained" color="primary" onClick={() => navigate('/')} >Add Employee</Button>
    </>
  );
}

export default Read;
