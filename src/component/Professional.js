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

function Professional() {
  const professional = useContext(EmployeeDetail);
  console.log(professional, "professional detail");
  return (
    <div className="container">
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
