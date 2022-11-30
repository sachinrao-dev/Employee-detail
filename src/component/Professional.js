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

function Professional() {
  const professional = useContext(EmployeeDetail);
  return (
    <div className="container">
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={professional.id}>
              <TableCell>Experiences</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {professional.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.professional.experiences}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Professional;
