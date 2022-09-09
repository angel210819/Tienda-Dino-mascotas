import { Paper } from '@mui/material'

function Item({item})
{
    return (
        <Paper>
        <img src={item.image} alt="fotos carrusel"
        style={{width:"100%",
        height: "45vh"}}
        /> 
        </Paper>
    )
}
export default Item