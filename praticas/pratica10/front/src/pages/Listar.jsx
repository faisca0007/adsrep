import React, { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Listagem from '../pages/Listagem'; // Importa o componente Listagem da pasta pages
import { buscarTodos, remover } from '../services/ContatoService'; // Importa as funções buscarTodos e remover da pasta services
import Cabecalho from '../components/Cabecalho'; // Importa o componente Cabecalho
import Conteudo from '../components/Conteudo'; // Importa o componente Conteudo

function Listar() {
  const [contatos, setContatos] = useState([]); // Estado para armazenar a lista de contatos
  const [erro, setErro] = useState(""); // Estado para armazenar mensagens de erro
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  // Função para buscar e carregar contatos
  const carregar = async () => {
    const resposta = await buscarTodos(); // Chama a função buscarTodos
    if (resposta.sucesso) {
      setContatos(resposta.dados); // Atualiza o estado com os dados dos contatos
    } else {
      setErro(resposta.mensagem); // Define a mensagem de erro
    }
  };

  useEffect(() => {
    carregar(); // Chama a função carregar ao montar o componente
  }, []);

  const trataAtualizar = (id) => {
    navigate(`/editar/${id}`); // Navega para a rota de edição do contato
  };

  const trataRemover = async (id) => {
    const resposta = await remover(id); // Chama a função remover
    if (resposta.sucesso) {
      carregar(); // Chama a função carregar para atualizar a lista
      setErro(""); // Limpa o erro
    } else {
      setErro(resposta.mensagem); // Define a mensagem de erro
    }
  };

  return (
    <>
      <Cabecalho /> {/* Elemento Cabecalho */}
      <Conteudo>
        <h2>Listar Contatos</h2> {/* Elemento h2 para subtítulo */}
        <Listagem 
          itens={contatos} 
          trataAtualizar={trataAtualizar} 
          trataRemover={trataRemover} 
        /> {/* Elemento Listagem com propriedades */}
        {erro && <p>{erro}</p>} {/* Renderização condicional para exibir o estado erro */}
      </Conteudo>
    </>
  );
}

export default Listar;
