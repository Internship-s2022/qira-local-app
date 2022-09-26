import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { ListProps, RowData } from './types';

const List = <T extends RowData>(props: ListProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.headers.map((row) => (
              <TableCell key={row.key}>{row.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id}>
              {props.headers.map((header, index) => (
                <TableCell key={index} component="th" scope="row">
                  {row[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
