import React,{useState,useEffect} from 'react';
import Mobile from "../Mobile/Mobile";
import "../Mobile/Mobile.css"
import axios from "axios";
const URL = "http://localhost:8000/mobiles";

const fetchHeader = async()=>
{
    return await axios.get(URL).then((res)=>res.data);

}


const Mobiles = () => {
    const [mobiles, setMobiles] = useState();
    useEffect(() => {
        fetchHeader().then(data=>setMobiles(data.mobiles));
    }, []);
    // console.log(mobiles);
    return (
        <div>
            <ul>
                {mobiles && mobiles.map((mobile,i)=>(
                    <li className='' key={i}>
                       <Mobile mobile={mobile}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Mobiles;
