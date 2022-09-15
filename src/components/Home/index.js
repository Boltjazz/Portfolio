import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import './index.scss';



const Home = () => {
    const [letterClass] = useState('text-animate')
   
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    Ramchander RadheyShyam Jaiswal
                <br />
                Iron and Steel Dealer
                </h1>
                <h2>Authorised Dealer of STEEL AUTHORITY OF INDIA (SAIL)</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
            <Logo />
        </div>
        </>
    );
}

export default Home