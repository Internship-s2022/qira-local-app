import React, { ReactNode } from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';

import styles from './list.module.css';
import { ListProps, RowData } from './types';

const List = <T extends RowData>(props: ListProps<T>) => {
  return (
    <TableContainer className={styles.container}>
      <Table className={styles.table}>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            {props.headers.map((row) => (
              <TableCell key={row.key.toString()} className={styles.columnHeader}>
                {row.header}
              </TableCell>
            ))}
            {props.showButtons && <TableCell className={styles.columnHeader}>Acciones</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id} hover={true}>
              {props.headers.map((header, index) => (
                <TableCell key={index} scope="row" className={styles.cell}>
                  {row[header.key] as ReactNode}
                </TableCell>
              ))}
              {props.showButtons && (
                <TableCell className={styles.cellButton}>
                  {props.buttons.map(
                    (btn, index) =>
                      btn(row).active && (
                        <Tooltip key={index} title={btn(row).title}>
                          <IconButton onClick={btn(row).onClick}>{btn(row).icon}</IconButton>
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
