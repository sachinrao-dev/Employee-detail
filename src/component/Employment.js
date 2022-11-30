import React, { useContext } from "react";
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
  const classes = useStyle();
  const employment = useContext(EmployeeDetail);
  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={employment.id}>
              <TableCell>Current Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employment.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.employment.currentCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Employment;
