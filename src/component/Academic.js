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
import EmployeeDetail from "./Context";
import NavBar from "./NavBar";
import useStyle from "./AcademicStyle";

function Academic() {
  const employeeAcademicData = useContext(EmployeeDetail);
  const classes = useStyle();
  const { userId } = useParams();
  const userDetail = employeeAcademicData.find(
    (item) => item.id === parseInt(userId, 10),
  );

  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={employeeAcademicData.id}>
              <TableCell>College Name</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Pass Out year</TableCell>
              <TableCell>address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={employeeAcademicData.id}>
              <TableCell>{userDetail.academic.collegeName}</TableCell>
              <TableCell>{userDetail.academic.degree}</TableCell>
              <TableCell>{userDetail.academic.passOut}</TableCell>
              <TableCell>{userDetail.academic.address}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Academic;
