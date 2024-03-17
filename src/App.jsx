import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import toast, { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/home';

// Components
import MouseEffect from './components/mouseEffect';
import Footer from "./components/footer";

function App() {
  const [isMouseEffectVisible, setIsMouseEffectVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseEffectVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEffectVisible(false);
  };

  return (
    <div className=' bg-stone-900 cursor-none'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Toaster />
      {isMouseEffectVisible && <MouseEffect className="mouseEffect" />}
      <div className='max-w-[1920px] mx-auto px-8 lg:px-24'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
