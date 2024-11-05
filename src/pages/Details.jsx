import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
     const fetchData = async() =>{
        try {
         const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
         console.log(responce.data);
         if(responce.status == 200){
            setData(responce.data)
         }
        } catch (error) {
         alert('something went wrong please try again later..', error)
        }
     }
     fetchData();
    }, [])
  return (
    <div>
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
    </div>
  )
}

export default Details