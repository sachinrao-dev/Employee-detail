import React, { useContext } from "react";
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
  const academic = useContext(EmployeeDetail);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={academic.id}>
              <TableCell>College Name</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Pass Out year</TableCell>
              <TableCell>address</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {academic.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.academic.collegeName}</TableCell>
                <TableCell>{item.academic.degree}</TableCell>
                <TableCell>{item.academic.passOut}</TableCell>
                <TableCell>{item.academic.address}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Academic;
