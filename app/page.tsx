'use client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Desafio1 from './pages/Desafio1';
import Desafio2 from './pages/Desafio2';
import Desafio3 from './pages/Desafio3';
import Desafio4 from './pages/Desafio4';
import Desafio5 from './pages/Desafio5';
import Desafio6 from './pages/Desafio6';
import Desafio7 from './pages/Desafio7';
import Desafio8 from './pages/Desafio8';

export default function Home() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Desafio1 />} />
            <Route path="/desafio2" element={<Desafio2 />} />
            <Route path="/desafio3" element={<Desafio3 />} />
            <Route path="/desafio4" element={<Desafio4 />} />
            <Route path="/desafio5" element={<Desafio5 />} />
            <Route path="/desafio6" element={<Desafio6 />} />
            <Route path="/desafio7" element={<Desafio7 />} />
            <Route path="/desafio8" element={<Desafio8 />} />
         </Routes>
      </BrowserRouter>
   );
}
