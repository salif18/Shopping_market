import React, { useState } from 'react';

const Login = ({loginSave}) => {
    const [login , setLogin] = useState({numero:'',password:''})
    const handleChange = (e)=>{
        const {name,value}=e.target 
         setLogin({...login , [name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        loginSave(login);
        setLogin({numero:'',password:''})
    }
    return (
        <>
           <form className='form-login' onSubmit={(e)=>handleSubmit(e)}>
           <div className="mb-3">
               <input type="number" className="form-control" name='numero' placeholder='Telephone :'
               value={login.numero} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="mb-3">
               <input type="password" className="form-control" name='password'  placeholder='Password :'
               value={login.password} onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <button className='btn btn-success'>Login</button>
            </div>
            </form>
        </>
 
    );
};

export default Login;