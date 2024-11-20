import React, { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React
import { useNavigate, useParams } from 'react-router-dom'; // Importa os hooks useNavigate e useParams do React Router
import Cabecalho from '../components/Cabecalho'; // Importa o componente Cabecalho
import Conteudo from '../components/Conteudo'; // Importa o componente Conteudo
import Formulario from './Formulario'; // Importa o componente Formulario
import { atualizar, buscarUm } from '../services/ContatoService'; // Importa as funções atualizar e buscarUm da pasta services

function Editar() {
    const [contato, setContato] = useState({}); // Cria um estado chamado contato inicializado com um objeto vazio
    const [erro, setErro] = useState(""); // Cria um estado para armazenar erros
    const { id } = useParams(); // Obtém o id da URL
    const navigate = useNavigate(); // Inicializa a função navigate
  
    // Código adicional vai aqui...
  
    return (
      <>
        <Cabecalho />
        <Conteudo>
          <h2>Editar Contato</h2>
          <Formulario trataEnviar={trataEnviar} valores={contato} />
          {erro && <p>{erro}</p>} {/* Renderiza mensagens de erro se existirem */}
        </Conteudo>
      </>
    );
  }
  
  export default Editar; // Exporta o componente Editar para ser acessado por outros módulos