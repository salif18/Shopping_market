import React, { useState } from 'react';

const Signup = ({signupSave}) => {
const [signup , setSignup] = useState({prenom:'',nom:'',address:'',numero:'',password:''})
const handleChange =(e)=>{
   const {name ,value} = e.target 
   setSignup({...signup , [name]:value})
}
const handleSubmit = (e)=>{
   e.preventDefault();
   signupSave(signup)
   setSignup({prenom:'',nom:'',address:'',numero:'',password:''})
}
    return(
        <>
        
        <div className='form-signup' onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-3">
           <input type="text" className="form-control" name='prenom' placeholder='Prenom :'
           value={signup.prenom} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
           <input type="text" className="form-control" name='nom'  placeholder='Nom :'
           value={signup.nom} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" name='address'  placeholder='Address:'
           value={signup.address} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="mb-3">
           <input type="number" className="form-control" name='numero' placeholder='Telephone :'
            value={signup.numero} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
           <input type="password" className="form-control" name='password'  placeholder='Password :'
           value={signup.password} onChange={(e)=>handleChange(e)} />
        </div>
        <div>
         <button className='btn btn-primary'>Signup</button>
        </div>
        </div>
    </>
    )

    
    
};

export default Signup;