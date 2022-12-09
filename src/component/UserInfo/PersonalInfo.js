/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
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
import NavBar from "./NavBar";
import useStyle from "../style/DashboardStyle";

function PersonalInfo() {
  const classes = useStyle();
  const { userId } = useParams();
  const [personalInfoData, setPersonalInfoData] = useState();
  const personalInfo = useSelector((state) => state.employee.item);

  useEffect(() => {
    const employeePersonalInformation = personalInfo.find(
      (item) => item.id === parseInt(userId, 10)
    );
    setPersonalInfoData(employeePersonalInformation);
  }, [personalInfo]);

  // const personalInfo = useSelector((state) => state.employee.item);
  // const employeePersonalInformation = personalInfo.find(
  //   (item) => item.id === parseInt(userId, 10)
  // );

  return (
    <div className={classes.tableContainer}>
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
            <TableRow>
              <TableCell>
                {personalInfoData?.personal?.name}
              </TableCell>
              <TableCell>
                {personalInfoData?.personal?.address}
              </TableCell>
              <TableCell>
                {personalInfoData?.personal?.phoneNo}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PersonalInfo;
