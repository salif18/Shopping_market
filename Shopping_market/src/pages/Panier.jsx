import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PanierVide from '../components/PanierVide';
import Axios from 'axios'

const Panier = () => {
    //Panier
    const [panier , setPanier]=useState([])
    useEffect(()=>{
        const getPanier = async()=>{
            try{
               const res = await Axios.get('http://localhost:3001/panier')
               if(res){
                const data = await res.data
                setPanier(data)
               }
            }catch(e){
                console.log(e)
            }
        }
        getPanier()
    },[])
    const deletProd = (id)=>{
        const deProToServer = async()=>{
            try{
               const res = await Axios.delete('http://localhost:3001/panier/:id')
               if(res){
                const data = await res.data
               }else{
                console.error(res.status)
               }
            }catch(e){
                console.log(e)
            }
        }
        deProToServer()
    }
    //deriver panier
  const [derivPanier,setDerivPanier] = useState([])
 useEffect(() =>{
     setDerivPanier(panier)
 },[panier])


    return (
        <>
           <Navbar/>
            <section className='section-panier'>
                {panier.length === 0 ? <PanierVide/>:(
                
                  derivPanier.map((itemp , indexP) => (
                    <li key={itemp.indexP}>
                        <div className='card cards'>
                           <div className='img'>
                              <img className='card-img' src={itemp.image} alt={itemp.nom}/>
                           </div>
                           <div className='card-body'>
                            <h1 className='card-name'>{itemp.nom}</h1>
                            <p className='card-desc'></p>
                            <h3 className='card-prix'>{itemp.prix * itemp.qty} Fcfa</h3>
                            <button className='btn btn-danger' onClick={()=>deletProd(itemp.id)}><i class="fa-solid fa-trash"></i> </button>
                           <div className='btn-incre'>
                            <button className='btn btn-success'
                            onClick={()=>{
                                const PANIER = derivPanier.map((items , itemsid)=> indexP === itemsid ?
                                {...items , qty : items.qty + 1} : items)
                                setDerivPanier(PANIER)}}>+</button>
                                <p className='item-qty'>{itemp.qty}</p>
                            <button className='btn btn-primary'
                            onClick={()=>{
                                const PANIER = derivPanier.map((items , itemsid) => indexP === itemsid ?
                                {...items , qty : items.qty - 1} : items)
                            setDerivPanier(PANIER)}}>-</button>
                           </div>
                         
                           </div>
                          
                        </div>
                    </li>)
                  ))  
                   
                }
               
            </section> 
             <div className='checkout'>
                <h1>TOTAL   <i class="fa-solid fa-cart-plus">   <span className='panier-length'>{panier.length}</span></i>  = {derivPanier.map((itemp)=> itemp.prix*itemp.qty).reduce((a,b)=> a+ b , 0)} Fcfa</h1>
                <button className='btn btn-secondary'>Placer votre Commande </button>
             </div>
            
        </>
    );
};

export default Panier;