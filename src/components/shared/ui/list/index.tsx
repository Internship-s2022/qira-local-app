import React from 'react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
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
            {props.showButtons && <TableCell>Actions</TableCell>}
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
              {props.showButtons && (
                <TableCell>
                  {props.buttons.map(
                    (btn, index) =>
                      btn.active && (
                        <Tooltip key={index} title={btn.title}>
                          <IconButton onClick={btn.onClick}>{btn.icon}</IconButton>
                        </Tooltip>
                      ),
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
