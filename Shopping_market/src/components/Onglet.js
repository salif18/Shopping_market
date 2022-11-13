import React from 'react';

const Onglet = ({all,accessoire,chaussure,vetement}) => {
    
   
    return (
        <>
            <div className='onglet'>
              <button className='btn btn-dark' onClick={()=>all()}>All</button>
              <button className='btn btn-dark' onClick={()=>accessoire()}>Accessoires</button>
              <button className='btn btn-dark' onClick={()=>chaussure()}>Chaussures</button>
              <button className='btn btn-dark'  onClick={()=>vetement()}>Vetements</button>
            </div> 
           
        </>
    );
};

export default Onglet;