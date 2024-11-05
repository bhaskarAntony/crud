import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AllData() {
    const [data, setData] = useState([]);

   useEffect(()=>{
    const fetchData = async() =>{
       try {
        const responce = await axios.get('https://fakestoreapi.com/products')
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


   const deleteHandler = async(id) =>{
    try {
        const responce = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        if(responce.status ==200){
            alert('product deleted successfuly')
        }
    } catch (error) {
        alert('faioled to delete product')
    }
   }

  return (
    <section style={{padding:"30px", display:'grid', gridTemplateColumns:'repeat(4, 1fr)', background:'#ccc', gap:'20px'}}>
        {
            data.length>0?(
                data.map((item, index)=>(
                    <div className="card" style={{background:'#fff', padding:'20px', marginBottom:'20px'}} key={index}>
                        <img src={item.image} alt={item.title} style={{width:'50%', display:'block', margin:'auto'}} />
                        <h3>{item.title}</h3>
                        <Link to={`/view/product/${item.id}`}>View product</Link>
                        <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                        <Link to={`/edit/product/${item.id}`}>Edit</Link>
                    </div>
                ))
            ):(
                <h1>No data</h1>
            )
        }
    </section>
  )
}

export default AllData