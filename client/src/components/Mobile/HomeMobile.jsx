import React from 'react';
import "./Mobile.css";
const HomeMobile = (props) => {
    const {_id,brand,image,price,description,model} = props.mobile
    return (
        <div className='card'>
            <img className='mobimg' src={image} alt={brand} />
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{description}</p>
            <h3>Rs {price}</h3>
        </div>
    );
}

export default HomeMobile;
