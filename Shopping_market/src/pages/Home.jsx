import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import logo from '../assets/fashion.jpg'
const Home = () => {
    return (
        <> 
          <Header/>
          <Navbar/>
          <div className='section-home'>
              <h1>Bienvenu</h1>
              <p>Chez toi le Bon coin pour tous vos achats, bon prix !! bon prix !!</p>
              <img src={logo} alt='fashion'/>
          </div>
            
        </>
    );
};

export default Home;