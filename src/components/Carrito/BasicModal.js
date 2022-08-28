import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CartItem from './CartItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SinProductos from './SinProductos';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY:"scroll"
};

export default function BasicModal({cart,delFromCart,clearCart}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    
  


  return (
    <div>
      <Button onClick={handleOpen}>
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon/>
        </Badge>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <article className="box">
        {cart.length=== 0
         ?<SinProductos/>
         :cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
        <button onClick={clearCart}>Limpiar Carrito</button> 
      </article>
        </Box>
      </Modal>
    </div>
  );
}