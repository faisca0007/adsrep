import React, { useState } from 'react'; // Importa React e o hook useState
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate do React Router
import Cabecalho from '../components/Cabecalho'; // Importa o componente Cabecalho
import Conteudo from '../components/Conteudo'; // Importa o componente Conteudo
import Formulario from './Formulario'; // Importa o componente Formulario
import { adicionar } from '../services/ContatoService'; // Importa a função adicionar do serviço

function Novo() {
  const [erro, setErro] = useState(""); // Cria um estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  // Função que lida com o envio do formulário
  const trataEnviar = async (data) => {
    // Chama a função adicionar e armazena o resultado
    const resposta = await adicionar(data); 

    // Verifica se a resposta é bem-sucedida
    if (resposta.sucesso) {
      navigate("/listar"); // Navega para a rota /listar em caso de sucesso
    } else {
      setErro(resposta.mensagem); // Atribui a mensagem de erro ao estado
    }
  };

  return (
    <>
      <Cabecalho /> {/* Exibe o componente Cabecalho */}
      <Conteudo> {/* Exibe o componente Conteudo */}
        <h2>Novo Contato</h2> {/* Subtítulo da página */}
        <Formulario trataEnviar={trataEnviar} valores={{}} /> {/* Componente Formulario */}
        {erro && <p>{erro}</p>} {/* Renderiza mensagem de erro, se houver */}
      </Conteudo>
    </>
  );
}

export default Novo; // Exporta o componente Novo para ser acessado por outros módulos
