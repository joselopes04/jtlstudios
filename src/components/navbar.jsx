import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='max-w-[1920px] mx-auto z-10 relative'>
            <div className='flex justify-center py-10 md:justify-between'>
                <div>
                    <img className='w-24 select-none' src={`${process.env.PUBLIC_URL}/images/logoNOBG.png`} title='jtlstudios Logo' alt='jtlstudios logo' />
                </div>
                <ul className='items-center hidden md:flex gap-x-10'>
                    <li className='navbarLink'>
                        <Link to={"/#portfolio"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='navbarLink'>
                        <Link to={"/#services"}>
                            Serviços
                        </Link>
                    </li>
                    <li className='navbarLink'>
                        <Link to={"/#form"}>
                            Entre em contacto
                        </Link>
                    </li>
                </ul> 
            </div>
        </nav>
    );
};

export default Navbar;