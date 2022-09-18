import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  Box,
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
    <Box>
      {cart.length > 0 ? (
        <TableContainer>
          <Table
            aria-label="spanning table"
            stickyHeader
            sx={{ minWidth: 300 }}
          >
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    color="primary"
                  >
                    Producto
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    color="primary"
                  >
                    Cantidad
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    color="primary"
                  >
                    Precio Unitario
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    color="primary"
                  >
                    Subtotal
                  </Typography>
                </TableCell>
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
                  <TableCell>
                    <Typography fontFamily="Roboto" fontSize="0.9rem">
                      {item.nombre}
                    </Typography>{" "}
                  </TableCell>
                  <TableCell align="right" sx={{ minWidth: 100 }}>
                    <IconButton
                      onClick={() => {
                        decrementProduct(item.id);
                      }}
                    >
                      <RemoveIcon style={{ color: "red" }} fontSize="small" />
                    </IconButton>{" "}
                    {item.quantity}
                    <IconButton
                      onClick={() => {
                        incrementProduct(item.id);
                      }}
                    >
                      <AddIcon fontSize="small" style={{ color: "green" }} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontFamily="Roboto" fontSize="0.9rem">
                      {" "}
                      ${item.precio}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontFamily="Roboto" fontSize="0.9rem">
                      {" "}
                      ${item.quantity * item.precio}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <IconButton
                    variant="contained"
                    size="small"
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
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    color="primary"
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography
                    fontFamily="Roboto"
                    fontSize="1.1rem"
                    fontStyle="italic"
                  >
                    ${subtotal(cart)}
                  </Typography>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography fontFamily="Roboto" variant="h1" fontStyle="italic">
          El carrito está vacío
        </Typography>
      )}
    </Box>
  );
};

export default Carrito;
