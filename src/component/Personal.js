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

function Personal() {
  const personal = useContext(EmployeeDetail);
  return (
    <div className="container">
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Mobile No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personal.map((item) => (
              <TableRow>
                <TableCell>{item.personal.name}</TableCell>
                <TableCell>{item.personal.address}</TableCell>
                <TableCell>{item.personal.phoneNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Personal;
