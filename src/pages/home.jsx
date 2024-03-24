import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/form';
import { FaCircleCheck } from "react-icons/fa6";

const Home = () => {

    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='flex flex-col-reverse items-center justify-center w-full min-h-screen xl:flex-row'>
                <div className='xl:w-1/2'>
                    <div className='flex flex-col max-w-2xl'>
                        <h1 className='w-full title'>You dream,</h1>
                        <h1 className='w-full title'>we develop!</h1>
                        <hr className='h-[1px] my-5 border-none bg-gradient-to-r orangeToRedGradient' />
                        <p className='text-3xl text-center text-white ng-10'>Websites profissionais e personalizados para o seu sucesso online.</p>
                        <a href="/#form" className="w-64 mx-auto button">Saber mais</a>
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
            </div>

            <div>
                <h1 className="title">Serviços</h1>
                <section className="py-12">
                    <div className="px-4 mx-auto">
                        <div className="flex flex-wrap items-stretch -mx-4">
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col max-w-md p-6 mx-auto space-y-6 transition-all border-2 shadow hover:scale-105 border-brandOrange rounded-xl sm:p-8 bg-slate-800">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-white">Website (Página única)</h4>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-6xl font-bold text-white">300€</span>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-white ">Website simples que contém a informação em apenas uma página.</p>
                                    <ul className="flex-1 mb-6 text-white">
                                        <li className="flex items-center mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Totalmente personalizável</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Feito à sua mediada</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Registo de domínio(opcional)</span>
                                        </li>
                                    </ul>
                                    <a href="/#form"  className="button">Saber mais</a>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col max-w-md p-6 mx-auto space-y-6 transition-all border-2 shadow hover:scale-105 border-brandOrange rounded-xl sm:p-8 bg-slate-800">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-white">Website (Multi página)</h4>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-6xl font-bold text-white">500€</span>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-white ">Website onde a informação encontra-se distribuida em multíplas páginas.</p>
                                    <ul className="flex-1 mb-6 text-white">
                                        <li className="flex items-center mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Todos os pontos do anterior</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Multíplas páginas</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Formulário de contacto(opcional)</span>
                                        </li>
                                    </ul>
                                    <a href="/#form" className="button">Saber mais</a>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col max-w-md p-6 mx-auto space-y-6 transition-all border-2 shadow hover:scale-105 border-brandOrange rounded-xl sm:p-8 bg-slate-800">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-white">Aplicação Web</h4>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-6xl font-bold text-white">1000€</span>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-white">Website que permite interação e processamento de dados oferecendo uma experiência dinâmica ao utilizador.</p>
                                    <ul className="flex-1 mb-6 text-white">
                                        <li className="flex items-center mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Todos os pontos dos anteriores</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Integração com base de dados</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <FaCircleCheck className='text-xl' />
                                            <span>Pprocessamento de dados</span>
                                        </li>
                                    </ul>
                                    <a href="/#form" className="button">Saber mais</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Form />
        </main>
    );
};

export default Home;