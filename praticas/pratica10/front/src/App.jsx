import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Novo from './pages/Novo';        // Importe seus componentes conforme necessário
import Listar from './pages/Listar';
import Editar from './pages/Editar';
import Erro404 from './pages/Erro404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Novo />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="*" element={<Erro404 />} /> {/* Rota para a página 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


