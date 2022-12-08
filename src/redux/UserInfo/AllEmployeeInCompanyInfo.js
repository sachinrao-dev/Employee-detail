import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../NavBar";
import useStyle from "../../component/style/DashboardStyle";

function PersonalInfo() {
  const classes = useStyle();
  const allEmployeeDataInfo = useSelector((state) => state.employee.item);
  return (
    <div className={classes.tableContainer}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployeeDataInfo.map((item) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.employment.currentCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PersonalInfo;
