import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeMobile from './Mobile/HomeMobile';


const fetchHandler = async() =>
{
    return await axios.get("http://localhost:8000/mobiles").then((res)=>res.data);
}

const Home = () => {
   const [mobiles, setMobiles] = useState();
   useEffect(() => {
    fetchHandler().then((data)=>setMobiles(data.mobiles))
   }, []);
//    console.log(mobiles)
    return (
        <div>    
           <ul>
                {mobiles && mobiles.map((mobile,i)=>(
                    <li className='mobile' key={i}>
                       <HomeMobile mobile={mobile}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
