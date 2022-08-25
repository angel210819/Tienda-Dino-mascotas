import axios from 'axios'
import React from 'react'



const Prueba = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get("http://localhost:5000/Felinos").then((response) => {
        setPost(response.data);
      });
    }, []);
    console.log(post);
    
  return (
    <div>Prueba</div>
  )
}

export default Prueba