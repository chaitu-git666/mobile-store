import{ FormLabel, TextField,Box, Button,FormControlLabel,Checkbox } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddMobile = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        brand:"",
        model:"",
        description:"",
        price:"",
        available:false,
        image:""
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) =>
    {
        setInputs((prevState)=>
        ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
        //console.log(e.target.name + "value" + e.target.value);
    }
    // console.log(inputs,checked);

    const sendRequest = async() =>
    {
       await axios.post("http://localhost:8000/mobiles",{
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
    return (
        <form onSubmit={handleSubmit}>
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
            <TextField value={inputs.brand} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='brand' required={true}/>
            <FormLabel>Model</FormLabel>
            <TextField value={inputs.model} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='model' required={true}/>
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' required={true}/>
            <FormLabel>Price</FormLabel>
            <TextField  value={inputs.price} onChange={handleChange} type={"number"} margin='normal' fullWidth variant='outlined' name='price' required={true}/>
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' required={true}/>
            <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
            <Button variant='contained' type='submit'>Add Mobile</Button>
            </Box>
        </form>
    );
}

export default AddMobile;
