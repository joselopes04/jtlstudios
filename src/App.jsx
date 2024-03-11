import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css'; // Import CSS file here

// Pages
import Home from './pages/home';

// Components
import MouseEffect from './components/mouseEffect';

function App() {
  const [isMouseEffectVisible, setIsMouseEffectVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseEffectVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEffectVisible(false);
  };

  return (
    <div className='px-8 lg:px-24 bg-gray-50 dark:bg-stone-900 cursor-none'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Render MouseEffect component conditionally */}
      {isMouseEffectVisible && <MouseEffect className="mouseEffect" />}
      <div className='max-w-[1920px] mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
