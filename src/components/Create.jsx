import {  Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [dobName,setDobName] = useState("")
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [selectedOption, setSelectedOption] = useState("");
  const [salaryName,setSalaryName] = useState("")
  const [descriptionName,setDescriptionName] = useState("")

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
        FirstName:firstName,
        LastName:lastName,
        DOB:dobName,
        StartDate:startDate,
        EndDate:endDate,
        Study:selectedOption,
        CurrentSalary:salaryName,
        Description:descriptionName
    }
    axios.post("https://sweede.app/DeliveryBoy/Add-Employee/",data)
    .then(() => navigate('/read'))
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={{padding:"10px"}}>
        <Grid item xs={6}>
          <InputLabel htmlFor="name" item sx={{ marginBottom: "16px" }}>
            First Name
          </InputLabel>
          <TextField
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="name" item sx={{ marginBottom: "16px" }}>
            Last Name
          </InputLabel>
          <TextField id="outlined-basic" label="last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="name" item sx={{ marginBottom: "16px" }}>
            DOB
          </InputLabel>
          <TextField
           item sx={{width:"60%"}}
            label="Select a Date"
            type="date"
            InputLabelProps={{
              shrink: true, 
            }}
            value={dobName}
            onChange={(e) => setDobName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="select" item sx={{ margin: "20px" }}>
            Study
          </InputLabel>
          <Select
            item sx={{ width: "60%" }}
            label="B.E"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <MenuItem value="">
              <em>B.E</em>
            </MenuItem>
            <MenuItem value="B.Tech">B.Tech</MenuItem>
            <MenuItem value="Diploma">Diploma</MenuItem>
            <MenuItem value="Master 's in CS">Master 's in CS</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={6}>
          <InputLabel htmlFor="start date" item sx={{ margin: "16px" }}>
            Start Date
          </InputLabel>
          <TextField
            label="Select a Date"
            type="date"
            InputLabelProps={{
              shrink: true, // This will make the label "shrink" when a date is selected
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
              shrink: true, // This will make the label "shrink" when a date is selected
            }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="salary" item sx={{ margin: "16px" }}>
            Enter salary
          </InputLabel>
          <TextField
            id="outlined-basic"
            label="Enter salary"
            variant="outlined"
            item
            sx={{ width: "60%" }}
            value={salaryName}
            onChange={(e) => setSalaryName(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <InputLabel htmlFor="name" item sx={{ margin: "16px", alignItems:"center"}}>
            Description
          </InputLabel>
        <TextField
         item
            sx={{ width: "100%", marginLeft:"340px" }}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={6}
          colums={6}
          value={descriptionName}
          onChange={(e) => setDescriptionName(e.target.value)}
        />
        </Grid>
       
        <Grid item xs={7} >
        <Button variant="outlined" startIcon={<DeleteIcon />} item xs={{margin:"20px"}}>
        Cancel
      </Button>
        </Grid>

        
        <Grid item xs={1}>
        <Button variant="contained" endIcon={<SendIcon />} item xs={{margin:"20px"}} onClick={submitHandler} >
        Send
      </Button>
        </Grid>

      </Grid>
    </div>
  );
};

export default Create;
