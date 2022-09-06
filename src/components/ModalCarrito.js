import React from "react";
import { CartContex } from "./Contex/CartContex";
import { useContext } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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

  const [open, setOpen] = React.useState(false);
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
            Confirmar compra
          </Typography>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            onClick={() => {
              addToCart({
                id: id,
                nombre: nombre,
                img: image,
                precio: precio,
              });
              handleClose();
            }}
          >
            Comprar!
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCarrito;
