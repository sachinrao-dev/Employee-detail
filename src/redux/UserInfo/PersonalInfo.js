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

function PersonalInfo() {
  const { userId } = useParams();
  const personalInfo = useSelector((state) => state.employee.item);
  const employeePersonalInformation = personalInfo.find(
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
                {employeePersonalInformation?.personal?.name}
              </TableCell>
              <TableCell>
                {employeePersonalInformation?.personal?.address}
              </TableCell>
              <TableCell>
                {employeePersonalInformation?.personal?.phoneNo}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PersonalInfo;
