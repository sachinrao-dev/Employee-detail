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

function Personal() {
  const employeePersonalData = useContext(EmployeeDetail);
  const classes = useStyle();
  const { userId } = useParams();
  const userDetail = employeePersonalData.find((item) => item.id === parseInt(userId, 10));
  return (
    <div className={classes.container}>
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
              <TableCell>{userDetail?.personal?.name || "--"}</TableCell>
              <TableCell>{userDetail?.personal?.address || "--"}</TableCell>
              <TableCell>{userDetail?.personal?.phoneNo || "--"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Personal;
