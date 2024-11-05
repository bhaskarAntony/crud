import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate()

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


    const changeHanlder = (e) =>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }


    const updateHandler = async(e)=>{
        e.preventDefault();
        try {
            const responce = await axios.put(`https://fakestoreapi.com/products/${id}`, data)
            if(responce.status ==200){
                alert('updated successfully')
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            alert(error)
            
        }
    }
  return (
    <div>
        <form action="" onSubmit={updateHandler}>
            <label htmlFor="">Title</label><br />
            <input type="text" value={data.title} name='title' onChange={changeHanlder} /> <br />

            <label htmlFor="">price</label> <br /> 
            <input type="number" value={data.price} name='price' onChange={changeHanlder} /> <br />
            <label htmlFor="">description</label> <br />
            <textarea name="description" cols="30" rows="10" value={data.description} onChange={changeHanlder}></textarea> <br />

            <label htmlFor="">category</label> <br />
            <input type="text" name='category' value={data.category}  onChange={changeHanlder}/> <br />

            <label htmlFor="">image url</label> <br />
            <input type="url"  name='image' value={data.image} onChange={changeHanlder}/> <br />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default Edit