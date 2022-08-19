import TextField from '@mui/material/TextField';
//import SearchIcon from "@mui/icons-material"
//import InputBase from "@mui/icons-material"


import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Buscar"
            variant="outlined"
            size="small"
            backgroundColor="white"
            style={{ background: '#FFFFFF' }}
        />
    </div>
  )
}

export default SearchBar







