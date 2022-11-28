import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "./AllUsersDetailStyle";
import EmployeeDetail from "./Context";

function AllUsersDetails() {
  const EmployeeInfo = useContext(EmployeeDetail);
  const classes = useStyle();
  return (
    <div className={classes.allUserList}>
      <div className={classes.allUser}>
        <h3>All Users</h3>
      </div>
      <div className={classes.tableContainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className={classes.rowTable}>
                <TableCell className={classes.headerTable}> Name </TableCell>
                <TableCell> Birth Date </TableCell>
                <TableCell> Occupation </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EmployeeInfo.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.dateOfBirth}</TableCell>
                  <TableCell>{item.occupation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default AllUsersDetails;
