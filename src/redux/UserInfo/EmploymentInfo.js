import React from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../NavBar";

function EmploymentInfo() {
  const { userId } = useParams();
  const employementlInfo = useSelector((state) => state.employee.item);
  const employeEmploymentlInfo = employementlInfo.find(
    (item) => item.id === parseInt(userId, 10),
  );

  return (
    <div>
      <NavBar />
      <NavLink
        to={`/users/${userId}/employment/alluserscompanies`}
      >
        Current company of all employees
      </NavLink>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Current Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {employeEmploymentlInfo?.employment?.currentCompany}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmploymentInfo;
