import React, { useEffect } from 'react';
import Form from '../components/form';
import { FaCar, FaCircleCheck, FaUsers } from "react-icons/fa6";
import LavaBubbles from '../components/lavaBubbles';
import { IoSpeedometerSharp } from "react-icons/io5";

const Home = () => {

    return (
        <main className='flex flex-col items-center justify-center'>

            <div className='flex flex-col-reverse items-center justify-center w-full min-h-screen xl:flex-row'>
                <LavaBubbles />
                <div className='z-10 flex flex-col max-w-2xl mb-32'>
                    <h1 className='w-full text-gray-100 titleNoColor'>You dream, we develop!</h1>
                    <hr className='h-[1px] my-5 border-none bg-gradient-to-r orangeToRedGradient' />
                    <h2 className='mb-6 text-xl text-white sm:text-3xl'>Websites profissionais e personalizados para o seu sucesso online.</h2>
                    <a href="/#form" className="w-64 mx-auto button">Saber mais</a>
                </div>
            </div>

            <div id='sobre' className='mb-24 sm:mb-48' >
                <h1 className="title">Sobre</h1>
                <div className='flex flex-col justify-center w-11/12 mx-auto md:w-4/5 text-pretty'>
                    <div className='xl:hidden'>
                        <p className='mt-4 text-lg font-semibold tracking-wider text-white sm:text-xl md:text-2xl'>
                            A <span className='font-bold text-brandOrange'>JTL STUDIOS </span>
                            é uma agência digital especializada na criação de websites.
                        </p>
                        <p className='mt-4 text-lg font-semibold tracking-wider text-white sm:text-xl md:text-2xl'>

                            Iremos transformar a sua presença online e impulsionar o sucesso do seu negócio.
                            Utilizamos as mais recentes <span className='font-bold text-brandOrange'>tecnologias e tendências </span>
                            de design para garantir que seu website seja não apenas visualmente impressionante, mas também altamente funcional e eficaz.
                        </p>
                    </div>
                    <div className='hidden xl:block'>
                        <p className='mt-4 text-lg font-semibold tracking-wider text-white sm:text-xl md:text-2xl'>
                            A <span className='font-bold text-brandOrange'>JTL STUDIOS </span>
                            é uma agência digital especializada na criação de websites.
                            Iremos transformar a sua presença online e impulsionar o sucesso do seu negócio.
                            Utilizamos as mais recentes <span className='font-bold text-brandOrange'>tecnologias e tendências </span>
                            de design para garantir que seu website seja não apenas visualmente impressionante, mas também altamente funcional e eficaz.
                        </p>
                    </div>
                    <p className='mt-4 text-lg font-semibold tracking-wider text-white sm:text-xl md:text-2xl'>
                        Conte com a <span className='font-bold text-brandOrange'>JTL STUDIOS </span>
                        para criar uma experiência digital única para seus clientes e alcançar seus objetivos online.
                        Entre em contato hoje mesmo e vamos começar a
                        <span className='font-bold text-brandOrange'> trabalhar juntos!</span>
                    </p>
                </div>
            </div>

            <div id='portfolio' className='mb-24 sm:mb-48' >
                <h2 className="title">Portfolio</h2>
                <div className='grid grid-cols-1 my-4 lg:mt-6 lg:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-16 w-[98%]'>
                    <a href='https://escola-conducao.jtlstudios.pt' rel="noreferrer" target="_blank">
                        <div className={`cardContainer relative group mx-auto`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projetos/escolaDeConducao.png)` }}>
                            <h3 className="cardTitle cardFilter">
                                Escola de condução
                            </h3>
                        </div>
                    </a>
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
            </div>

            <div className='mb-24 sm:mb-48'>
                <h2 id='services' className="title">Serviços</h2>
                <section className="pt-6">
                    <div className="px-4 mx-auto">
                        <div className="flex flex-wrap items-stretch -mx-4">
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col max-w-md p-6 mx-auto space-y-6 transition-all border-2 shadow hover:scale-105 border-brandOrange rounded-xl sm:p-8 bg-slate-800">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Website (Página única)</h3>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-5xl font-bold text-white md:text-6xl">300€</span>
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
                                    <a href="/#form" className="button">Saber mais</a>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col max-w-md p-6 mx-auto space-y-6 transition-all border-2 shadow hover:scale-105 border-brandOrange rounded-xl sm:p-8 bg-slate-800">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Website (Multi página)</h3>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-5xl font-bold text-white md:text-6xl">500€</span>
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
                                        <h3 className="text-2xl font-bold text-white">Aplicação Web</h3>
                                        <div className='flex flex-col'>
                                            <span className="ml-2 -mb-2 text-sm text-gray-200">A partir de:</span>
                                            <span className="text-5xl font-bold text-white md:text-6xl">1000€</span>
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
                                            <span>Processamento de dados</span>
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
        </main >
    );
};

export default Home;