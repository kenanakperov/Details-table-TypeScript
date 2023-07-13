import axios from "axios";
import { useState, useEffect } from "react";
import { IProductData } from "../models/models";
import { Link } from "react-router-dom";


const Products = () => {
    const [data,setData] = useState<IProductData[]>([])
    const [error,setError] = useState("")
  
    async function getData(){
      try{
        const response = await axios<IProductData[]>("https://fakestoreapi.com/products")
        setData(response.data)
      }catch(err:unknown){
        setError("Error")
      }
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
        <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><img src={item.image} alt="" /></td>
            <Link to={{ pathname: `/details/${item.id}`}}>
            <td><button onClick={()=>{
              const key = 'myKey';
              const value = `${item.id}`;
              localStorage.setItem(key, value);
            }} className="border bg-slate-600 rounded">Details</button></td>
            </Link>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products