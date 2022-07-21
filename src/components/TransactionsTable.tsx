import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { forEach } from "lodash";

function createData(createdAt: Date, number: number, block_interval: number) {
  return { createdAt, number, block_interval };
}

export default function TransactionsTable() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.googleQuery);

  let rows: any = [];
  data.forEach((row: any) => {
    createData(row.createdAt, row.number, row.block_interval);
  });
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">created at</TableCell>
            <TableCell align="center">number</TableCell>
            <TableCell align="center">block_interval</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdAt}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.block_interval}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
