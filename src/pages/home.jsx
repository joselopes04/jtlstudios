import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/form';

const Home = () => {

    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='flex flex-col-reverse items-center justify-center w-full min-h-screen xl:flex-row'>
                <div className='xl:w-1/2'>
                    <div className='flex flex-col max-w-2xl'>
                        <h1 className='w-full title'>You dream,</h1>
                        <h1 className='w-full title'>we develop!</h1>
                        <hr className='h-[2px] my-5 border-none bg-gradient-to-r orangeToRedGradient' />
                        <p className='text-3xl leading-10 text-center text-white'>Websites profissionais e personalizados para o seu sucesso online.</p>
                        <a href="/#form"  className="w-64 mx-auto mt-6 text-white focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center bg-gradient-to-br orangeToRedGradient hover:opacity-70">Saber mais</a>
                    </div>
                </div>
                <div className='flex justify-center mb-12 xl:w-1/2 xl:mb-0'>
                    <img className='select-none w-[20rem] xl:w-[30rem]' src={`${process.env.PUBLIC_URL}/images/logoNOBG.png`} alt='logo' />
                </div>
            </div>

            <h1 className="title">Portfolio</h1>
            <div className='grid grid-cols-1 my-4 lg:my-12 xl:grid-cols-2 2xl:grid-cols-3 gap-y-5 gap-x-16 w-[98%] sm:w-[90%]'>
                <div className={`cardContainer relative group mx-auto`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projetos/escolaDeConducao.png)` }}>
                    <h3 className="cardTitle cardFilter">
                        Escola de condução
                    </h3>
                </div>
                <div className={`cardContainer relative group mx-auto bg-gray-600 flex items-center cursor-none`}>
                    <h3 className="mx-auto cardTitle">
                        Coming soon
                    </h3>
                </div>
                <div className={`cardContainer relative group mx-auto bg-gray-600 flex items-center cursor-none`}>
                    <h3 className="mx-auto cardTitle">
                        Coming soon
                    </h3>
                </div>
                <div></div>
            </div>
            <Form/>
        </main>
    );
};

export default Home;
