import React, { useEffect } from 'react';
import MouseEffect from '../components/mouseEffect';

const Home = () => {
  

    return (
        <main className='flex flex-col items-center justify-center min-h-screen'>

            <img className='w-[40rem] select-none' src={`${process.env.PUBLIC_URL}/images/logo+slogan.png`} alt='logo' />
        </main>
    );
};

export default Home;
