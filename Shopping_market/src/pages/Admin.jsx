import Axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Admin = ({products}) => {

    const [vendre ,setVendre] = useState({image:'',nom:'',description:'',category:'',prix:'' })
  
  const handleChange =(e)=>{
    const {name, value}= e.target
    setVendre({...vendre , [name]:value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const postToserverProd = async()=>{
       try{
           const res = await Axios.get('http://localhost:3001/products',vendre)
           if(res){
            const data = await res.data
           }else{
            console.error(res.status)
           }
       }catch(e){
         console.log(e)
       }
    }
    postToserverProd()
    console.log(vendre)
    setVendre({image:'',nom:'',description:'',category:'',prix:''})
  }
  
    return (
        <>  
            <Navbar/>
            <form className='forms' onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-3">
               <label HtmlFor="image" className="form-label">Photo <i class="fa-solid fa-camera"></i></label>
               <input type="text" className="form-control" name='image' id='image' placeholder="photo"  
               value={vendre.image} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-3">
               <label HtmlFor="nom" className="form-label">Nom</label>
               <input type="text" className="form-control" name='nom' id='nom' placeholder='nom du produit ...'
               value={vendre.nom} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-3">
               <label HtmlFor="description" className="form-label">Description</label>
               <textarea type="text" className="form-control" name='description' id='description' rows='3' placeholder="description du produit ..."
               value={vendre.description} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-3">
               <label HtmlFor="category" className="form-label">Category</label>
               <select className="form-control" name='category' 
               value={vendre.category} onChange={(e)=>handleChange(e)}>
                <option>--- Select -- category ---</option>
                <option value='Chaussure'>Chaussure</option>
                <option value='Vetement'>Vetement</option>
                <option value='Accessoire'>Accessoire</option>
                
               </select>
            </div> 
            <div className="mb-3">
               <label HtmlFor="prix" className="form-label">Prix</label>
               <input type="number" className="form-control" name='prix' id='prix' placeholder='Prix'
               value={vendre.prix} onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <button className='btn btn-primary'>Vendre</button>
            </div>
            </form>
           
        </>
    );
};

export default Admin;