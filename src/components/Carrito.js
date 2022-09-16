import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { CartContex } from "../components/Contex/CartContex";
import { useContext, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const Carrito = () => {
  const {
    cart,
    updateState,
    incrementProduct,
    decrementProduct,
    delFromCart,
    clearCart,
  } = useContext(CartContex);

  function subtotal(items) {
    return items
      .map((item) => item.precio * item.quantity)
      .reduce((sum, i) => sum + i, 0);
  }

  useEffect(() => {
    updateState();
    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer>
      <Table aria-label="spanning table" stickyHeader sx={{ minWidth: 300 }}>
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
              <TableCell align="right" sx={{ minWidth: 100 }}>
                <IconButton
                  onClick={() => {
                    decrementProduct(item.id);
                  }}
                >
                  <RemoveIcon style={{ color: "red" }} fontSize="small" />
                </IconButton>
                {item.quantity}
                <IconButton
                  onClick={() => {
                    incrementProduct(item.id);
                  }}
                >
                  <AddIcon fontSize="small" style={{ color: "green" }} />
                </IconButton>
              </TableCell>
              <TableCell align="right">{item.precio}</TableCell>
              <TableCell align="right">{item.quantity * item.precio}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <IconButton
                variant="contained"
                size="small"
                disableElevation
                color="primary"
                onClick={() => {
                  clearCart();
                }}
              >
                <CancelPresentationIcon
                  style={{ color: "red" }}
                  fontSize="medium"
                />
              </IconButton>
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
