/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "../style/DashboardStyle";

function Dashboard() {
  const employee = useSelector((state) => state.employee);
  const classes = useStyle();
  return (
    <div className={classes.tableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell> Birth Date </TableCell>
              <TableCell> Occupation </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.item.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link to={`users/${item.id}/personal`}>{item.name}</Link>
                </TableCell>
                <TableCell>{item.dateOfBirth}</TableCell>
                <TableCell>{item.occupation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
