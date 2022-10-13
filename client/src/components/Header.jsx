import React from 'react';
import {AppBar, Toolbar,Tabs,Tab, Typography} from '@mui/material';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { useState } from 'react';
import {NavLink} from "react-router-dom"
const Header = () => {
   const[value,setValue]= useState();
   console.log(value)
    return (
        <div>
            <AppBar position='sticky'>
              <Toolbar sx={{backgroundColor:"#03fc84"}}>
                <NavLink to={'/'} style={{color:"white"}} onClick={()=>setValue(undefined)}>
                <Typography >
                  <InstallMobileIcon />
                </Typography>
                </NavLink>
                <Tabs sx={{ml:"auto"}}
                      textColor='inherit' 
                      indicatorColor='primary' 
                      value={value} 
                      onChange={(e,val)=>setValue(val)}
                      >
                    <Tab LinkComponent={NavLink} to="/add"
                         label="Add Product"/>
                    <Tab  LinkComponent={NavLink} to="/mobiles"
                          label="Mobiles"/>
                    <Tab  LinkComponent={NavLink} to="/about"
                          label="About us"/>
                </Tabs>
              </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
