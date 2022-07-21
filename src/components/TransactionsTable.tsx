import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../redux/app/hooks";

function createData(createdAt: Date, number: number, block_interval: number) {
  return { createdAt, number, block_interval };
}

export default function TransactionsTable() {
  const { data } = useAppSelector((state) => state.googleQuery);

  data.forEach((row: any) => {
    createData(row.timestamp, row.number, row.block_interval);
  });
  return (
    <TableContainer component={Paper}>
      {data && (
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Timestamp</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Block Interval</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow
                key={row.number}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.timestamp}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.block_interval}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
