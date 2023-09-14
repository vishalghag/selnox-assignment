import { Button, Grid, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setFirstName(localStorage.getItem("FirstName"))
    setDob(localStorage.getItem("DOB"))
    setStartDate(localStorage.getItem("StartDate"))
    setEndDate(localStorage.getItem("EndDate"))
    setDescription(localStorage.getItem("Description"))
  }, [])

  const updateHandler = (e) => {
    e.preventDefault();
    let data = {
      FirstName: firstName,
      DOB: dob,
      StartDate: startDate,
      EndDate: endDate,
      Description: description,
    };
  
    console.log(data, 'data');
  
    // Set the appropriate headers to indicate that this is a JSON request.
    const headers = {
      'Content-Type': 'application/json',
    };
  
    axios
      .put(`https://sweede.app/DeliveryBoy/update-Employee/${id}`, data, { headers })
      .then((response) => {
        if (response.status === 200) {
          // Successful response status code (e.g., 200 OK).
          console.log('Employee data updated successfully:', response.data);
          navigate('/read');
        } else {
          // Handle other response status codes here, if needed.
          console.error('Unexpected response status:', response.status);
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with an error status code.
          console.error('Error updating employee data:', error.response.status);
        } else {
          // Network error or other unexpected errors.
          console.error('Network error or unexpected error:', error.message);
        }
      });
  };
  

  const cancelHandler = () => {
    navigate('/read');
  }

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={{ padding: "10px" }}>
        <Grid item xs={12}>
          <InputLabel htmlFor="name" item sx={{ marginBottom: "16px" }}>
            First Name
          </InputLabel>
          <TextField
            item sx={{ width: "60%" }}
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="name" item sx={{ marginBottom: "16px" }}>
            DOB
          </InputLabel>
          <TextField
            item sx={{ width: "60%" }}
            label="Select a Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <InputLabel htmlFor="start date" item sx={{ margin: "16px" }}>
            Start Date
          </InputLabel>
          <TextField
            label="Select a Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <InputLabel htmlFor="end date" item sx={{ margin: "16px" }}>
            End Date
          </InputLabel>
          <TextField
            label="Select a Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <InputLabel htmlFor="name" item sx={{ margin: "16px", alignItems: "center" }}>
            Description
          </InputLabel>
          <TextField
            item
            sx={{ width: "100%", marginLeft: "340px" }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            columns={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={7} >
          <Button
            variant="contained"
            color="secondary"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </Grid>

        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={updateHandler}
          >
            Update
          </Button>
        </Grid>

      </Grid>
    </>
  )
}

export default Update;
