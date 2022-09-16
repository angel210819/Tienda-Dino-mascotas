import { CartContex } from "./Contex/CartContex";
import { useContext, useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

const ModalCarrito = ({ id, image, nombre, precio }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToCart } = useContext(CartContex);

  return (
    <>
      <IconButton
        color="primary"
        size="medium"
        aria-label="add to shopping cart"
        onClick={() => {
          handleOpen();
        }}
      >
        <AddShoppingCartIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seleccione la cantidad que desea
          </Typography>
          <Button
            onClick={() => {
              if (cantidad > 1) {
                setCantidad(cantidad - 1);
              }
            }}
          >
            -
          </Button>
          {cantidad}
          <Button
            onClick={() => {
              setCantidad(cantidad + 1);
            }}
          >
            +
          </Button>
          <Button
            style={{ color: "green" }}
            onClick={() => {
              addToCart({
                id: id,
                nombre: nombre,
                img: image,
                precio: precio,
                quantity: cantidad,
              });
              handleClose();
            }}
          >
            Comprar!
          </Button>
          <Button
            style={{ color: "red" }}
            onClick={() => {
              handleClose();
            }}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCarrito;
