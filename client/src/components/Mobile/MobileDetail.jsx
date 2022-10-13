import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MobileDetail = () => {
    const history = useNavigate();
    const [checked, setChecked] = useState(false);
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    useEffect(()=>{
      const handleFetch = async() =>
      {
        await axios
            .get(`http://localhost:8000/mobiles/${id}`)
            .then((res)=>res.data).then((data)=>setInputs(data.mobile))
            
      }
      handleFetch();
    },[id])

    const sendRequest = async() =>
    {
       await axios.put(`http://localhost:8000/mobiles/${id}`,{
            brand:String(inputs.brand),
            model:String(inputs.model),
            description:String(inputs.description),
            price:String(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked)
        }).then((res)=>res.data);
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // console.log(inputs,checked);
        sendRequest().then(()=>history('/'))
    }

    const handleChange = (e) =>
    {
        setInputs((prevState)=>
        ({
            ...prevState,
            [e.target.name]:e.target.value,
        })) 
    }

    return (
        <div>
            {inputs && <form onSubmit={handleSubmit}>
            <Box 
                display={'flex'} 
                flexDirection={'column'} 
                justifyContent={'center'} 
                maxWidth={700}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={6} >
            <FormLabel>Brand</FormLabel>
            <TextField value={inputs.brand} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='brand' />
            <FormLabel>Model</FormLabel>
            <TextField value={inputs.model} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='model' />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
            <FormLabel>Price</FormLabel>
            <TextField  value={inputs.price} onChange={handleChange} type={"number"} margin='normal' fullWidth variant='outlined' name='price' />
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
            <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
            <Button variant='contained' type='submit'>Update Mobile</Button>
            </Box>
        </form>}
        </div>
    );
}

export default MobileDetail;
