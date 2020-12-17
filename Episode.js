import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: "450px",
    marginTop: "90px",
    border: "3px",
    fontSize: "20px",
    fontFamily: "poppins"
  },

});

function createData(Name, Duration, Listener, Date) {
  return { Name, Duration, Listener, Date };
}

const rows = [
  createData('Social Self Care', "05:30", 10, '11/29/20'),
  createData('Emotional Self Care', '08:45', 2, '11/29/20'),
  createData('One-Sided Love', '08:45', 2, '11/29/20'),
  createData('5 best thing to have in a relationship', '08:45', 2, '11/29/20'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME OF EPISODE</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Listener</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Duration}</TableCell>
              <TableCell align="right">{row.Listener}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
