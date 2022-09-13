import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { CartContex } from "../components/Contex/CartContex";
import { useContext } from "react";

const Carrito = () => {
  const { cart, incrementProduct, decrementProduct, delFromCart, clearCart } =
    useContext(CartContex);

  function subtotal(items) {
    return items
      .map((item) => item.precio * item.quantity)
      .reduce((sum, i) => sum + i, 0);
  }

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
                    decrementProduct(item.id);
                  }}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  onClick={() => {
                    incrementProduct(item.id);
                  }}
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="right">{item.precio}</TableCell>
              <TableCell align="right">{item.quantity * item.precio}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="center">
              <Button
                variant="contained" color="secondary"
                disableElevation
                onClick={() => {
                  clearCart();
                }}
              >
                <CleaningServicesIcon fontSize="small"></CleaningServicesIcon>
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
};

export default Carrito;
