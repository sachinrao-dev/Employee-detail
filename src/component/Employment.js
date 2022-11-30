import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "./NavBar";
import EmployeeDetail from "./Context";
import useStyle from "./EmploymentStyle";

function Employment() {
  const { userId } = useParams();
  const classes = useStyle();
  const employeeEmploymentData = useContext(EmployeeDetail);
  const userDetail = employeeEmploymentData.find((item) => item.id === parseInt(userId, 10));
  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={employeeEmploymentData.id}>
              <TableCell>Current Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={employeeEmploymentData.id}>
              <TableCell>{userDetail.employment.currentCompany}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Employment;
