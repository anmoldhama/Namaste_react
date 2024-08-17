import {useState, useEffect} from 'react';

const useOnlineStatus = ()=>{

    const [onlineStatus,setOnlinestatus] = useState(true);
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlinestatus(false);
        });

        window.addEventListener('online',()=>{
            setOnlinestatus(true);
        });
    },[]);
    console.log(onlineStatus);
    return onlineStatus;
    
}

export default useOnlineStatus;