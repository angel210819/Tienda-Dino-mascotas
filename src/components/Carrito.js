import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";

function subtotal(items) {
  return items
    .map((item) => item.precio * item.quantity)
    .reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable() {
  const { cart, incrementProduct, decrementProduct, delFromCart, clearCart } =
    useContext(CartContex);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <IconButton
                  size="small"
                  onClick={() => {
                    delFromCart(item.id);
                  }}
                >
                  <DeleteIcon color="primary" />
                </IconButton>
              </TableCell>
              <TableCell>
                <img
                  src={item.img}
                  alt={item.nombre}
                  width="75"
                  height="75"
                ></img>
              </TableCell>

              <TableCell>{item.nombre}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    incrementProduct(item.id);
                  }}
                >
                  +
                </Button>
                {item.quantity}
                <Button
                  onClick={() => {
                    decrementProduct(item.id);
                  }}
                >
                  -
                </Button>
              </TableCell>
              <TableCell align="right">{item.precio}</TableCell>
              <TableCell align="right">{item.quantity * item.precio}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={() => {
                  clearCart();
                }}
              >
                Limpiar Carrito
              </Button>
            </TableCell>
            <TableCell colSpan={2}></TableCell>
            <TableCell align="right" colSpan={2}>
              Total
            </TableCell>
            <TableCell align="right">{subtotal(cart)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
