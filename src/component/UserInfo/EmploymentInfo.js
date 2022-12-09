/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
import NavBar from "./NavBar";
import useStyle from "../style/DashboardStyle";

function EmploymentInfo() {
  const classes = useStyle();
  const { userId } = useParams();
  const [employementlInfoData, setEmployementlInfoData] = useState();
  const employementlInfo = useSelector((state) => state.employee.item);
useEffect(()=>{
  const employeEmploymentlInfo = employementlInfo.find(
    (item) => item.id === parseInt(userId, 10),
  );
  setEmployementlInfoData(employeEmploymentlInfo);
}, [employementlInfo]);

  // const employeEmploymentlInfo = employementlInfo.find(
  //   (item) => item.id === parseInt(userId, 10),
  // );

  return (
    <div className={classes.tableContainer}>
      <div className={classes.navLink}>
        <NavBar />
        <div className={classes.bar}>
          <NavLink
            className={classes.navBar}
            to={`/users/${userId}/employment/alluserscompanies`}
          >
            Current company of all employees
          </NavLink>
        </div>
      </div>
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
                {employementlInfoData?.employment?.currentCompany}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmploymentInfo;
