import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <div>
      <h2>Formulario de Reservaciones</h2>

        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue="Nombre"
        />

        <TextField
          required
          id="outlined-required"
          label="Apellido"
          defaultValue="Apellido"
        />
        
        <Box
        sx={{
        width: 500,
        maxWidth: '100%',
         }}
        >
        <TextField fullWidth label="Dirección" id="fullWidth" />
        </Box> 

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
       </div>
    </Box>
  );
}