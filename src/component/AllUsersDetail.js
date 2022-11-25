import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "./AllUsersDetailStyle";

function AllUsersDetails() {
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
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default AllUsersDetails;
