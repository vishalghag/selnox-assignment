import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TableData = ({ getEmployeeData,deleteHandler,editHandler }) => {
  return (
    <div>
      <TableContainer component={Paper} style={{ margin: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getEmployeeData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>No data available</TableCell>
              </TableRow>
            ) : (
              getEmployeeData.map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell>{emp.FirstName}</TableCell>
                  <TableCell>{emp.DOB}</TableCell>
                  <TableCell>{emp.StartDate}</TableCell>
                  <TableCell>{emp.EndDate}</TableCell>
                  <TableCell>{emp.Description}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        editHandler(emp.id,emp.FirstName,emp.DOB,emp.StartDate,emp.EndDate,emp.Description)
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ marginLeft: "20px" }}
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        deleteHandler(emp.id)
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
