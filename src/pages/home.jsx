import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Home = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let projectType = document.getElementById("projectType").value;
        let description = document.getElementById("description").value;

        if (name && email && projectType && description) {

            emailjs.init("pYniI36v63W9VDHMP");

            emailjs.send('service_87l0sut', 'template_7wobq0o', {
                from_name: 'Your Name',
                to_name: 'Recipient Name',
                message: `Nome: ${name}, Email:${email}, Tipo de projeto:${projectType}, Descrição:${description}`
            }).then(function (response) {
                toast.success('Obrigado pela sua mensagem!')
            }).catch(function (error) {
                console.error('Email sending failed:', error);
            });
        } else {
            toast.error("Preencha todos os campos.")
        }


    };

    return (
        <main className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center min-h-screen'>
                <img className='w-[40rem] select-none' src={`${process.env.PUBLIC_URL}/images/logo+slogan.png`} alt='logo' />
            </div>

            <h1 className="title">Portfolio</h1>
            <div className='grid grid-cols-1 my-4 lg:my-12 xl:grid-cols-2 min-[1740px]:grid-cols-3 gap-y-5 gap-x-16 w-[98%] sm:w-[90%]'>
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
            <h1 className="my-12 title">Entra em contacto</h1>

            <div className='grid grid-cols-1 mb-6 sm:grid-cols-2'>
                <div></div>
                <form className="flex flex-col items-center max-w-sm mx-auto">
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-2 text-sm font-medium text-white">Nome</label>
                        <input type="text" id="name" className="inputField" placeholder="O seu nome" />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-2 text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" className="inputField" placeholder="O seu email" />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-2 text-sm font-medium text-white">Indique o que procura</label>
                        <select id="projectType" className="inputField">
                            <option value="" disabled selected>Selecione o tipo de projeto</option>
                            <option value="website" >Website</option>
                            <option value="webapp" >Web App</option>
                            <option value="mobileapp" >Mobile App</option>
                            <option value="outro" >Outro</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-2 text-sm font-medium text-white">Descreva o seu projeto</label>
                        <textarea id="description" rows="4" className="resize-none inputField" placeholder="Breve descrição do seu projeto"></textarea>
                    </div>
                    <button onClick={(e) => sendEmail(e)} className="text-white focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center bg-gradient-to-br orangeToRedGradient hover:opacity-70">Enviar</button>
                </form>
            </div>
        </main>
    );
};

export default Home;
