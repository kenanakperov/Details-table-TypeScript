import axios from "axios"
import { useEffect, useState } from "react"
import { IProductData } from "../models/models"


const Details = () => {
  // const [data,setData] = useState<IProductData>(null)
  // useEffect(()=>{
    // const response = await axios.get<IProductData>(`https://fakestoreapi.com/products/${localStorage.getItem("myKey")}`)
  //   setData(res.data)
  // })

  const [data,setData] = useState<IProductData>()
    const [error,setError] = useState("")
  
    async function getData(){
      try{
        const response = await axios.get<IProductData>(`https://fakestoreapi.com/products/${localStorage.getItem("myKey")}`)
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
          </tr>
        </thead>
        <tbody>
          {
            <tr key={data?.id}>
              <td>{data?.id}</td>
              <td>{data?.title}</td>
              <td>{data?.price}</td>
              <td>{data?.description}</td>
              <td><img src={data?.image} alt="" /></td>
            </tr>
          }
        </tbody>
        </table>
    </div>
  )
}

export default Details