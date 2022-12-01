/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "./Style/DashboardStyle";
import EmployeeDetail from "./Context";

function Dashboard() {
  const EmployeeInfo = useContext(EmployeeDetail);
  const classes = useStyle();

  return (
    <div className={classes.allUserList}>
      <div className={classes.allUser}>
        <h3>All Users</h3>
      </div>
      <div className={classes.tableContainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className={classes.rowTable}>
                <TableCell className={classes.headerTable}>
                  Name
                </TableCell>
                <TableCell> Birth Date </TableCell>
                <TableCell> Occupation </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EmployeeInfo.map((item) => (
                <TableRow>
                  <TableCell><Link to={`users/${item.id}/personal`}>{item.name}</Link></TableCell>
                  <TableCell>{item.dateOfBirth}</TableCell>
                  <TableCell>{item.occupation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Dashboard;
