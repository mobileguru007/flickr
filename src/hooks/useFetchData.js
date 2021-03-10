import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import {API_URL} from '../config/api'
import {data} from '../config/data'

export function useFetchData (){
    const [datas,setDatas] = useState([]);
    useEffect(()=>{
    //    const result = onNetworkCall();
       setDatas(data);
    },[])
 
   return datas
}

const onNetworkCall =()=>{
    return axios.get(API_URL)
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        console.log("error from backend",err);
    })
}