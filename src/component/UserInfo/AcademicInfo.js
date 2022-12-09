/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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

function AcademicInfo() {
  const classes = useStyle();
  const { userId } = useParams();
  const academicInfo = useSelector((state) => state.employee.item);
  const [academicInfoData, setAcademicInfoData] = useState();

  useEffect(()=>{
    const employeeAcademicInformation = academicInfo.find(
      (item) => item.id === parseInt(userId, 10)
    );
    setAcademicInfoData(employeeAcademicInformation);
    
  }, [academicInfo]);
  // const employeeAcademicInformation = academicInfo.find(
  //   (item) => item.id === parseInt(userId, 10)
  // );

  return (
    <div className={classes.tableContainer}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>College Name</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Pass Out year</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {academicInfoData?.academic?.collegeName}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.degree}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.passOut}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.address}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AcademicInfo;
