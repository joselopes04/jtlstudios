import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

const Form = () => {

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
        <div id='form' className='mb-32'>
            <h1 className="pb-6 title">Entre em contacto</h1>
            <div className='grid max-w-5xl grid-cols-1 p-10 mb-12 transition-all border-2 gap-x-4 border-brandOrange rounded-xl sm:grid-cols-2 bg-slate-800'>
                <div>
                    <h2 className='text-xl font-bold tracking-wider text-white ng-10 sm:text-3xl'>
                        Contacte-nos e <span className='text-brandOrange'>juntos</span> vamos criar algo
                        <span className='text-brandOrange'> incrível</span>!
                    </h2>
                    <ul className="my-5 ml-3 space-y-4 text-white sm:space-y-10 sm:my-10 sm:mb-0">
                        <li className='flex items-center space-x-5 font-semibold tracking-wide'>
                            <MdOutlinePhone className='text-xl' />
                            <a className='text-base sm:text-xl' href="tel:+351 935 882 636">+351 935 882 636</a>
                        </li>
                        <li className='flex items-center space-x-5 font-semibold tracking-wide'>
                            <MdOutlineMail className='text-xl' />
                            <a className='text-base sm:text-xl' href="mailto:info@jtlstudios.pt">info@jtlstudios.pt</a>
                        </li>
                    </ul>
                </div>
                <form className="flex flex-col items-center max-w-sm mx-auto">
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-1 font-medium text-white">Nome</label>
                        <input type="text" id="name" className="inputField" placeholder="O seu nome" />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-1 font-medium text-white">Email</label>
                        <input type="email" id="email" className="inputField" placeholder="O seu email" />
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="mb-1 font-medium text-white ">Indique o que procura</label>
                        <select id="projectType" className="inputField">
                            <option value="" disabled selected>Selecione o tipo de projeto</option>
                            <option value="website" >Website (Página única)</option>
                            <option value="website" >Website (Multi página)</option>
                            <option value="Aplicação web" >Aplicação Web</option>
                            <option value="mobileapp" >Mobile App</option>
                            <option value="outro" >Outro</option>
                            <option value="nãoSei" >Não tenho a certeza</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full mb-5">
                        <label className="font-medium text-white mb-21">Descreva o seu projeto</label>
                        <textarea id="description" rows="4" className="resize-none inputField" placeholder="Breve descrição do seu projeto"></textarea>
                    </div>
                    <button onClick={(e) => sendEmail(e)} className="flex items-center button gap-x-3">
                        Enviar mensagem
                        <BsFillSendFill />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;