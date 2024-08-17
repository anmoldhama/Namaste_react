import {useState, useEffect} from 'react';
import { res_api_1,res_api_2 } from '../utils/constants';
 
const useRestaurantMenu = (resId)=>{

    const [resItems,setResItems] = useState(null);

    useEffect(()=>{
        fetchedMenu();
     },[]); 
    
     const fetchedMenu = async()=>{
        const data = await fetch(res_api_1+resId+res_api_2);
        const fetchedData = await data.json();
        console.log(fetchedData);
        setResItems(fetchedData.data);
     }

     return resItems;
}

export default useRestaurantMenu;

