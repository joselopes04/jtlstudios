import React, { useEffect } from 'react';
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {

    return (
        <footer className='w-full bg-gradient-to-br orangeToRedGradient'>
            <div className='max-w-[1920px] mx-auto'>
                <div className="flex flex-col justify-between p-5 sm:p-10 space-y-8 border-b lg:flex-row lg:space-y-0 border-[#1c19174D]">
                    <div className="mx-auto lg:w-2/3">
                        <img className='w-56' src={`${process.env.PUBLIC_URL}/images/LogoMonoCrom.png`} title='jtlstudios Logo' alt='jtlstudios Logo'/>
                    </div>
                    <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-1/3 sm:grid-cols-2">
                        <div className="flex flex-col items-center space-y-3">
                            <h3 className="text-lg font-bold tracking-widest text-white uppercase">Contacto</h3>
                            <ul className="space-y-4 text-gray-200">
                                <li className='flex items-center space-x-1 font-semibold tracking-wide'>
                                    <MdOutlinePhone className='text-lg' />
                                    <a href="tel:+351 935 882 636">+351 935 882 636</a>
                                </li>
                                <li className='flex items-center space-x-1 font-semibold tracking-wide'>
                                    <MdOutlineMail className='text-lg' />
                                    <a href="mailto:info@jtlstudios.pt">info@jtlstudios.pt</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <h3 className="text-lg font-bold tracking-widest text-white uppercase">Legal</h3>
                            <ul className="space-y-1 text-gray-200">
                                <li>
                                    <a className='font-semibold tracking-wide' href="#">Política de privacidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm font-semibold tracking-widest text-center text-white">JTL Studios © 2024 - Todos os direitos reservados.</div>
            </div>
        </footer>
    );
};

export default Footer;