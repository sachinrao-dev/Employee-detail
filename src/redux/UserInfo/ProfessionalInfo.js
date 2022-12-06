import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../NavBar";

function ProfessionalInfo() {
  const { userId } = useParams();
  const professionalInfo = useSelector((state) => state.employee.item);
  const employeeProfessionalInfo = professionalInfo.find(
    (item) => item.id === parseInt(userId, 10),
  );

  return (
    <div>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Experiences</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {employeeProfessionalInfo?.professional?.experiences}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfessionalInfo;
