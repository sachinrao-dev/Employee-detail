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
import EmployeeDetail from "../Context";
import NavBar from "../NavBar";
import useStyle from "../Style/PersonalStyle";

function Professional() {
  const employeeProfessionalData = useContext(EmployeeDetail);
  const { userId } = useParams();
  const userProfessional = employeeProfessionalData.find(
    (item) => item.id === parseInt(userId, 10),
  );
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow key={employeeProfessionalData.id}>
              <TableCell>Experiences</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={employeeProfessionalData.id}>
              <TableCell>
                {userProfessional?.professional?.experiences}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Professional;
