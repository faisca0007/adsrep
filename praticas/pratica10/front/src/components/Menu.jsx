import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa o NavLink

// Componente Menu
function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Listar Contatos</NavLink>
        </li>
        <li>
          <NavLink to="/novo">Novo Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Exporta o componente Menu
export default Menu;
