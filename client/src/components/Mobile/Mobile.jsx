import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Mobile.css";

const Mobile = (props) => {
    const {_id,brand,model,description,price,image} = props.mobile;
    const history = useNavigate();
    const handleDelete = async() =>
    {
      await  axios.delete(`http://localhost:8000/mobiles/${_id}`)
      .then((res)=>res.data)
      .then(()=>history("/"))
    //   .then(()=>history("/mobiles"))
    }
    return (
        <div className='card'>
            <img src={image} alt={brand} />
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{description}</p>
            <h3>Rs {price}</h3>
            <Button LinkComponent={Link} to={`/mobile/${_id}`} sx={{mt:"auto"}}>UPDATE</Button>
            <Button onClick={handleDelete} sx={{mt:"auto"}}>DELETE</Button>
        </div>
    );
}

export default Mobile;
