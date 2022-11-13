import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Onglet from '../components/Onglet';

const Produits = ({products}) => {
  
  const adjOut =(product)=>{
    const adPanToServer = async () =>{
       try{ 
          const res = await Axios.post('http://localhost:3001/panier',{...product,qty:1})
          if(res){
            const data = await res.data
          }else{
            console.error(res.status)
          }
       }catch(e){
        console.log(e)
       }
    }
    adPanToServer()
  }
const [categ,setCateg]=useState([])

const all = ()=>{
  setCateg('')
}
const accessoire = ()=>{
  setCateg('Accessoire')
}
const chaussure = ()=>{
  setCateg('Chaussure')
}
const vetement = ()=>{
  setCateg('Vetement')
}

    return (
        <>
           <Header/>
           <Navbar/>
           <Onglet all={all} accessoire={accessoire} chaussure={chaussure} vetement={vetement}/>
           <section className='section-produits'>
            {
              products.filter((cat)=> cat.category.includes(categ)).map((product, index)=>(
              <li key={index}>
                <div className='card'>
                  <div className='img'>
                     <img className='card-img' src={product.image} alt={product.nom} />
                     <i class="fa-solid fa-share-nodes"></i>
                  </div>
                  <div className='card-body'>
                     <h1 className='card-name'>{product.nom}</h1>
                     <p className='card-desc'></p>
                     <h3 className='card-prix'>{product.prix} Fcfa</h3>
                     <button className='btn btn-secondary' onClick={()=>adjOut(product)}>ajouter <i class="fa-solid fa-cart-plus"></i></button>
                  </div>
                </div>
              </li>
              ))
            }
           </section>
        </>
    );
};

export default Produits;