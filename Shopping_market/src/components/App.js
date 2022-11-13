
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Panier from "../pages/Panier";
import Produits from "../pages/Produits";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Axios from 'axios'

function App() {
  //Etat de produit
  const [ products, setProducts] = useState([])

  useEffect(()=>{
    const getProdToServer = async()=>{
      try{
         const res = await Axios.get('http://localhost:3001/products')
         if(res){
          const data = await res.data
          setProducts(data)
         }else{
          console.error(res.status)
         }
      }catch(e){
        console.log(e)
      }
    }
    getProdToServer()
  })

  // 
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/produits' element={<Produits products={products} />}/>
      <Route path='/panier' element={<Panier />}/>
      <Route path='/admin' element={<Admin products={products}/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
   </>
 );
}

export default App;
