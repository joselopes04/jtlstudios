import React, { useEffect } from 'react';
import MouseEffect from '../components/mouseEffect';

const Home = () => {


    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center min-h-screen'>
                <img className='w-[40rem] select-none' src={`${process.env.PUBLIC_URL}/images/logo+slogan.png`} alt='logo' />
            </div>

            <h1 className="text-3xl lg:text-6xl font-semibold tracking-wider text-transparent hero2 bg-gradient-to-r orangeToRedGradient bg-clip-text font-['ethnocentric']">Projetos</h1>
            <div className='grid grid-cols-1 my-4 lg:my-12 sm:grid-cols-3 gap-y-5 gap-x-16 w-[90%]'>
                <div>
                    <div className={`cardContainer relative group`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projetos/escolaDeConducao.png)` }}>
                        <h3 className="cardTitle cardFilter">
                            Escola de condução
                        </h3>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </main>
    );
};

export default Home;
