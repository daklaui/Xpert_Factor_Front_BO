import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableRows from '../Mock/tabData';

interface TabProrogationProps {
  TableData: TableRows[];
  onDateClick: (date: Date) => void; // New prop for the callback
}

const TabProrogation = ({ TableData, onDateClick }: TabProrogationProps) => {
  return (
    <TableContainer sx={{ width: '100%', height: '100%' }}>
      <Table>
        <TableHead sx={{ fontSize: '12px', backgroundColor: '#e1bee7' }}>
          <TableRow>
            <TableCell>Référence Document</TableCell>
            <TableCell>Montant TTC</TableCell>
            <TableCell>Devise</TableCell>
            <TableCell>Echéance</TableCell>
            <TableCell>Montant Ouvert</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: 'action.hover' }}>
          {TableData.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '14px'}}>{row.RéfDocument}</TableCell>
              <TableCell sx={{ fontSize: '14px'}}>{row.MontantTTC}</TableCell>
              <TableCell sx={{ fontSize: '14px'}}>{row.Devise}</TableCell>
              <TableCell sx={{ fontSize: '14px', cursor: 'pointer' }}
                onClick={() => onDateClick(new Date(row.Echéance))}>{row.Echéance}</TableCell>
              <TableCell sx={{ fontSize: '14px'}}>{row.MontantOuvert}</TableCell>
            </TableRow>          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabProrogation;
