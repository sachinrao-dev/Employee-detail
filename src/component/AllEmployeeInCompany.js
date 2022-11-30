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
import useStyle from "./AllEmployeeInCompanyStyle";
import NavBar from "./NavBar";

function AllEmployeeInCompany() {
  const classes = useStyle();
  const allEmployeeData = useContext(EmployeeDetail);
  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployeeData.map((item) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.occupation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllEmployeeInCompany;
