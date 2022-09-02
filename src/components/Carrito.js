import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";



function subtotal(items) {
  return items.map(( item ) => item.precio * 7).reduce((sum, i) => sum + i, 0);
}


export default function SpanningTable() {
    const { cart } = useContext(CartContex);
    console.log(cart)
    return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nombre}</TableCell>
              <TableCell align="right">{7}</TableCell>
              <TableCell align="right">{item.precio}</TableCell>
              <TableCell align="right">{7 * (item.precio)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={1}></TableCell>
            <TableCell align="right" colSpan={2}>Total</TableCell>
            <TableCell align="right">{subtotal(cart)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
